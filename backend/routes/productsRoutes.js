const express = require('express');
const admin= require('firebase-admin');
const { collection, getDocs, getFirestore, doc, setDoc, getDoc, query, where} = require('firebase/firestore');
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
    // router.post('/all-products', (req, res) => {
    //   const longitude=req.body.longitude;
    //   const latitude=req.body.latitude;
    //   const productRef = collection(dbs, 'products');
        
    //     getDocs(productRef)
    //         .then((snapshot) => {
    //             const products = [];
    //             snapshot.forEach((doc) => {
    //                 products.push({ id: doc.id, data: doc.data() });
    //                 store_id=doc.data().store_id;
    //                 //console.log(doc.data());
    //                 const storeRef=collection(dbs,'stores');
    //                 getDocs(storeRef)
    //                 .then((storeSnapshot)=>{
    //                   storeSnapshot.forEach((storeDoc)=>{
    //                     const storeData=storeDoc.data();
    //                     if(storeData.store_id==store_id){
    //                       const store_latitude=storeData.latitude;
    //                       const store_longitude=storeData.longitude;
    //                       const store_distance=calculateDistance(latitude,longitude,store_latitude,store_longitude);
    //                       console.log(store_distance);
    //                       products.push({store_distance:store_distance});
    //                       //products.push({store_distance:store_distance});
    //                     }
    //                   });
    //                 });

    //                 //const store_distance=calculateDistance(latitude,longitude,store_latitude,store_longitude);
    //                 //products.push({store_distance:store_distance});
    //             });
    //             // Send the retrieved data as a response to the client
    //             res.status(200).json({products});
    //         })
    //         .catch((error) => {
    //             console.log('Error getting products: ', error);
    //             res.status(500).json({ error: 'Failed to retrieve products' });
    //         });
    // });
    router.post('/all-products', async (req, res) => {
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const productRef = collection(dbs, 'products');
    
      try {
        const snapshot = await getDocs(productRef);
        const products = [];
    
        for (const doc of snapshot.docs) {
          const productData = doc.data();
          const store_id = productData.store_id;
    
          const storeRef = collection(dbs, 'stores');
          const storeSnapshot = await getDocs(storeRef);
    
          storeSnapshot.forEach((storeDoc) => {
            const storeData = storeDoc.data();
            if (storeData.store_id === store_id) {
              const store_latitude = storeData.latitude;
              const store_longitude = storeData.longitude;
              const store_distance = calculateDistance(latitude, longitude, store_latitude, store_longitude);
              products.push({ id: doc.id, data: productData, store_distance });
            }
          });
        }
    
        // Send the retrieved data as a response to the client
        res.status(200).json({ products });
      } catch (error) {
        console.log('Error getting products: ', error);
        res.status(500).json({ error: 'Failed to retrieve products' });
      }
    });
    






    // router.post('/all-products', (req, res) => {
    //   const { latitude, longitude } = req.body;
    //   //console.log(latitude);
    //   //console.log(longitude);
    //   const user_latitude=parseFloat(latitude);
    //   const user_longitude=parseFloat(longitude);
    //   console.log(user_latitude);
    //   const productRef = collection(dbs, 'products');
      
    //   getDocs(productRef)
    //     .then((snapshot) => {
    //       const products = [];
    
    //       snapshot.forEach((doc) => {
    //         const productData = doc.data();
    //         const store_id=productData.store_id;
    //         console.log(store_id);
    
    //         // Calculate the distance using the calculateDistance function
    //         const store_distance = calculateDistance(latitude, longitude, store_latitude, store_longitude);
            
    //         // Add the store_distance to the product data
    //         productData.store_distance = store_distance;
    
    //         // Push the product data with the calculated store_distance to the products array
    //         products.push(productData);
    //       });
    
    //       // Send the retrieved data as a response to the client
    //       res.status(200).json({ products });
    //     })
    //     .catch((error) => {
    //       console.log('Error getting products: ', error);
    //       res.status(500).json({ error: 'Failed to retrieve products' });
    //     });
    // });
    

    //This gives products filtered by the distance from the user's location (it gives in a 5km radius)
    router.post('/products-by-distance', (req, res) => {
      const longitude=req.body.longitude;
      const latitude=req.body.latitude;
      const maxDistance = 80;
      // const distance=req.body.distance;
      // const maxDistance = (parseFloat)distance;
      const filteredStores = []; 
      console.log(longitude);  

      let filteredProds = []
  
      const storeRef = collection(dbs, 'stores');
      getDocs(storeRef)
          .then((storeSnapshot) => {
              storeSnapshot.forEach(async (storeDoc) => {
                  const storeData = storeDoc.data();
                  
                  // Calculate the distance between the user and the store
                  const storeDistance = calculateDistance(
                      parseFloat(latitude),
                      parseFloat(longitude),
                      storeData.latitude,
                      storeData.longitude
                  );
                  // if (storeDistance <= maxDistance) {
                      // Store is within the specified distance
                      filteredStores.push(storeData);
                      const prodRef = collection(dbs, 'products')

                      const q =  query(prodRef, where('store_id', '==', storeData.store_id))
                      getDocs(q).then((querySnapshot) => {
                        querySnapshot.forEach((doc) =>{

                          filteredProds.push(doc.data())
                        })
                      })
                      storeData.store_distance = storeDistance;

                      filteredStores.push(storeData);
                  // }
              });
  
              // Send the filtered stores as a response after the loop is completed
              res.status(200).json({ products: filteredProds });
          })
          .catch((error) => {
              console.error('Error querying stores:', error);
              res.status(500).json({ error: 'Failed to retrieve stores' });
          });
  });

  //this will give the products filtered by the search query as well as the proximity to the user's location
router.post('/products-by-distance/:search_name', (req, res) => {
  const searchName = req.params.search_name;
  const keywords = searchName.split(' ');
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const maxDistance = 80;
  const filteredStores = [];

  const storeRef = collection(dbs, 'stores');
  getDocs(storeRef)
    .then((storeSnapshot) => {
      storeSnapshot.forEach((storeDoc) => {
        const storeData = storeDoc.data();
        const storeDistance = calculateDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          storeData.latitude,
          storeData.longitude
        );
        if (storeDistance <= maxDistance) {
          filteredStores.push(storeData);
          storeData.store_distance = storeDistance;
        }
      });
      // Query the 'products' collection based on the search name
      const productsRef = collection(dbs, 'products');
      const queries = keywords.map(keyword => 
        query(productsRef, where('description', 'array-contains-any', [keyword]))
      );
    
      console.log('queries', queries);
      

      queryCheck = query(productsRef, where('product_name', '>=', searchName), where('product_name', '<=', searchName + '\uf8ff'));
        
      //console.log('queryCheck', queryCheck);

      getDocs(queryCheck)
        .then((productSnapshot) => {
          const filteredProducts = [];
          productSnapshot.forEach((productDoc) => {
            const productData = productDoc.data();
            // Include only products matching the search name
            filteredProducts.push(productData);
          });

          // Send the filtered stores and products as a response
          res.status(200).json({ stores: filteredStores, products: filteredProducts });
        })
        .catch((productError) => {
          console.error('Error querying products:', productError);
          res.status(500).json({ error: 'Failed to retrieve products' });
        });
    })
    .catch((error) => {
      console.error('Error querying stores:', error);
      res.status(500).json({ error: 'Failed to retrieve stores' });
    });
});

 // Define the route with the product path parameter
 router.get('/:product_id', (req, res) => {
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
                  phone: storeData.contact,
                  locality: storeData.locality,
                  city: storeData.city,
                  address: storeData.address,
                  uid: storeData.uid
                };

                res.status(200).json({ product: productData });
              } else {
                res.status(403).json({ error: 'Store not found' });
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
        res.status(403).json({ error: 'Product not found' });
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