const express = require('express');
const admin= require('firebase-admin');
const { collection, addDoc, getDocs, getFirestore, doc, setDoc, getDoc, query, where } = require('firebase/firestore');
const router = express.Router();
const uuid=require('uuid');


const productsRoutes = (db, firebaseApp) => {
    // Route for handling the addition of products and their details
    /**
    {
    product_id,
    product_name,
    subtitle,
    description,
    price,
    quantity,
    images,
    category,
    subcategory,
    availability,
    rating,
    reviews_count,
    store_id
    }
     */
    const dbs=getFirestore(firebaseApp);
    
    router.post('/add-product', (req, res) => {
      const {
          product_name, subtitle, description, price, quantity, images, category, subcategory, availability, rating, reviews_count, store_id
      } = req.body;
  
      const product_id = uuid.v4();
  
      const storeDataFromStoreId = {};
  
      // Query the 'stores' collection based on the store_id
      const storeRef = doc(dbs, 'stores', store_id);
  
      getDoc(storeRef)
          .then((storeDoc) => {
              if (storeDoc.exists()) {
                  const storeData = storeDoc.data();
                  const { store_name, latitude, longitude } = storeData;
  
                  // Assign store data to the variable
                  storeDataFromStoreId.store_name = store_name;
                  storeDataFromStoreId.latitude = latitude;
                  storeDataFromStoreId.longitude = longitude;
                  //storeDataFromStoreId.phone = phone;
  
                  // Now you can use storeDataFromStoreId in your payload
                  setDoc(doc(dbs, 'products', product_id), {
                      product_id,
                      product_name,
                      subtitle,
                      description,
                      price,
                      quantity,
                      images,
                      category,
                      subcategory,
                      availability,
                      rating,
                      reviews_count,
                      store_id
                  })
                  .then(() => {
                      console.log('Product Added to the database');
                      res.status(200).json({
                          message: 'Product added successfully',
                          product_added: true,
                          product_id,
                          status: 200,
                          storeDataFromStoreId
                      });
                  })
                  .catch((error) => {
                      console.log('Error occurred while adding the product', error);
                      res.status(500).json({ message: 'Error occurred while adding the product', error });
                  });
              } else {
                  res.status(404).json({ error: 'Store not found' });
              }
          })
          .catch((error) => {
              console.log('Error getting store details: ', error);
              res.status(500).json({ error: 'Failed to retrieve store details' });
          });
  });
  

    //DISCLAIMER: this gives all products listed on the database. This is not the way to go in production.
    router.get('/all-products', (req, res) => {
        const productRef = collection(dbs, 'products');
        
        getDocs(productRef)
            .then((snapshot) => {
                const products = [];
                snapshot.forEach((doc) => {
                    products.push({ id: doc.id, data: doc.data() });
                });
                // Send the retrieved data as a response to the client
                res.status(200).json({ products });
            })
            .catch((error) => {
                console.log('Error getting products: ', error);
                res.status(500).json({ error: 'Failed to retrieve products' });
            });
    });

    //This gives products filtered by the distance from the user's location (it gives in a 5km radius)
    router.post('/products-by-distance', (req, res) => {
      const longitude=req.body.longitude;
      const latitude=req.body.latitude;
      const maxDistance = 80;
      // const distance=req.body.distance;
      // const maxDistance = (parseFloat)distance;
      const filteredStores = []; 
      console.log(longitude);  
  
      const storeRef = collection(dbs, 'stores');
      getDocs(storeRef)
          .then((storeSnapshot) => {
              storeSnapshot.forEach((storeDoc) => {
                  const storeData = storeDoc.data();
                  
                  // Calculate the distance between the user and the store
                  const storeDistance = calculateDistance(
                      parseFloat(latitude),
                      parseFloat(longitude),
                      storeData.latitude,
                      storeData.longitude
                  );
                  if (storeDistance <= maxDistance) {
                      // Store is within the specified distance
                      filteredStores.push(storeData);
                      storeData.store_distance = storeDistance;

                      filteredStores.push(storeData);
                  }
              });
  
              // Send the filtered stores as a response after the loop is completed
              res.status(200).json({ stores: filteredStores });
          })
          .catch((error) => {
              console.error('Error querying stores:', error);
              res.status(500).json({ error: 'Failed to retrieve stores' });
          });
  });
  

 // Define the route with the product path parameter
 router.post('/:product_id', (req, res) => {
  const param_product_id = req.params.product_id;
  const productRef = doc(dbs, 'products', param_product_id);

  getDoc(productRef)
    .then((productDoc) => {
      if (productDoc.exists()) {
        const productData = productDoc.data();
        // Check if the product has a store_id
        if (productData.store_id) {
          const storeId = productData.store_id;
          const storeRef = doc(dbs, 'stores', storeId);

          getDoc(storeRef)
            .then((storeDoc) => {
              if (storeDoc.exists()) {
                const storeData = storeDoc.data();

                // Include store data in the productData variable
                productData.store_data = {
                  store_name: storeData.store_name,
                  latitude: storeData.latitude,
                  longitude: storeData.longitude,
                };

                res.status(200).json({ product: productData });
              } else {
                res.status(404).json({ error: 'Store not found' });
              }
            })
            .catch((error) => {
              console.log('Error getting store details: ', error);
              res.status(500).json({ error: 'Failed to retrieve store details' });
            });
        } else {
          // If there is no store_id, return the product data without store information
          res.status(200).json({ product: productData });
        }
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch((error) => {
      console.log('Error getting product: ', error);
      res.status(500).json({ error: 'Failed to retrieve product' });
    });
});

// Define the route with the store path parameter
router.post('/store/:store_id', async (req, res) => {
  const param_store_id = req.params.store_id;
  try {
    const productsRef = collection(dbs, 'products'); // Use 'products' collection reference
    const q = query(productsRef, where('store_id', '==', param_store_id));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      products.push(productData);
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});




function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const radLat1 = (Math.PI * lat1) / 180;
  const radLon1 = (Math.PI * lon1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const radLon2 = (Math.PI * lon2) / 180;

  // Haversine formula
  const dLat = radLat2 - radLat1;
  const dLon = radLon2 - radLon1;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radLat1) * Math.cos(radLat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  console.log('distance', distance);
  return distance;
} 
    return router;
  };



  module.exports = productsRoutes;