const express = require('express');
const admin= require('firebase-admin');
const { collection, addDoc, getDocs, getFirestore, doc, setDoc } = require('firebase/firestore');
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
      const {product_name,subtitle,description,price,quantity,images,category,subcategory,availability,rating,reviews_count,store_id } = req.body;
      const product_id=uuid.v4();
      setDoc(doc(dbs, 'products', product_id),{
        product_id:product_id,
        product_name:product_name,
        subtitle:subtitle,
        description:description,
        price:price,
        quantity:quantity,
        images:images,
        category:category,
        subcategory:subcategory,
        availability:availability,
        rating:rating,
        reviews_count:reviews_count,
        store_id:store_id,
      })
        .then(() => {
          console.log('Product Added to the database');
          res.status(200).json({ 
            message: 'Product added successfully',
            product_added: true, 
            status: 200,
        });
        })
        .catch((error) => {
          console.log('Error occurred while adding the product', error);
          res.status(500).json({ message: 'Error occurred while adding the product', error });
        });
    });

    // router.get('/store-details', (req, res) => {
    //     const storeRef = collection(dbs, 'stores');
        
    //     getDocs(storeRef)
    //         .then((snapshot) => {
    //             const stores = [];
    //             snapshot.forEach((doc) => {
    //                 stores.push({ id: doc.id, data: doc.data() });
    //             });
    //             // Send the retrieved data as a response to the client
    //             res.status(200).json({ stores });
    //         })
    //         .catch((error) => {
    //             console.log('Error getting documents: ', error);
    //             res.status(500).json({ error: 'Failed to retrieve stores' });
    //         });
    // });
      return router;
  };
 
  module.exports = productsRoutes;
