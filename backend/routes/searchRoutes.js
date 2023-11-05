const express = require('express');
const admin = require('firebase-admin');
const { collection, getDocs, where, getFirestore, query } = require('firebase/firestore');
const router = express.Router();
const uuid = require('uuid');

const searchRoutes = (firebaseApp) => {
    const dbs = getFirestore(firebaseApp);

    // Route for Searching using Product name 
    router.get("/searchProduct", (req, res) => {
        const productName = req.query.product_name;
        // console.log( req.query);
        // Create a query against the collection
        const productsRef = query(collection(dbs, "products"), where("product_name", "==", productName));

        getDocs(productsRef)
            .then(productsSnapshot => {
                const products = productsSnapshot.docs.map(doc => doc.data());
                res.json(products); // Sending the matched products as a response
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                res.status(500).send("Internal Server Error");
            });
    });

    return router;
};

module.exports = searchRoutes;
