const express = require('express');
const admin= require('firebase-admin');
const { collection, addDoc, getDocs, getFirestore, doc, setDoc } = require('firebase/firestore');
const router = express.Router();

const storeRoutes = (db, firebaseApp) => {
    // Route for handling the addition of stores and their details
    /**
    {
    store_name,
    address,
    store_owner,
    uid,
    locality,
    longitude,
    latitude,
    city
    }
     */
    const dbs=getFirestore(firebaseApp);
  
    router.post('/store-details', (req, res) => {
      const { store_name, address, store_owner,uid, locality,longitude,latitude,city } = req.body;
      store_id="store_"+uid;
      console.log(store_id);
      setDoc(doc(dbs, 'stores',store_id),{
        store_id:store_id,
        store_name:store_name,
        address:address,
        store_owner:store_owner,
        uid:uid,
        city:city,
        locality:locality,
        longitude:longitude,
        latitude:latitude,
      })
        .then(() => {
          console.log('Store Listed on the database');
          res.status(200).json({ message: 'Store Registered successful', 
          user:{
            "test successful": "test successful"
          } });
        })
        .catch((error) => {
          console.log('Error occurred while adding user to the database', error);
          res.status(500).json({ message: 'Error Occurred while adding the store', error });
        });
    });

    router.get('/store-details', (req, res) => {
        const storeRef = collection(dbs, 'stores');
        
        getDocs(storeRef)
            .then((snapshot) => {
                const stores = [];
                snapshot.forEach((doc) => {
                    stores.push({ id: doc.id, data: doc.data() });
                });
                // Send the retrieved data as a response to the client
                res.status(200).json({ stores });
            })
            .catch((error) => {
                console.log('Error getting documents: ', error);
                res.status(500).json({ error: 'Failed to retrieve stores' });
            });
    });
      return router;
  };
 
  module.exports = storeRoutes;
