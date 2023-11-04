const express = require('express');
const admin= require('firebase-admin');
const { collection, addDoc, getDocs, where, getFirestore, doc, setDoc, getDoc, query,deleteDoc } = require('firebase/firestore');
const router = express.Router();
const uuid=require('uuid');

const orderRoutes = (db, firebaseApp) => {
  const dbs = getFirestore(firebaseApp);

  // Route for placing a new order
  router.post("/wishlist", (req, res) => {
    const order_id =  uuid.v4() ;
    const { product_id, user_id } = req.body;
    setDoc(doc(dbs, 'orders', order_id), {
      user_id: user_id,
      product_id: product_id,
      order_id: order_id,
      status: "pending",
      orderDate: new Date().toISOString(),
    })
      .then(() => {
        res.status(200).json({ message: "Order placed successfully" });
      })
      .catch((error) => {
        console.error("Error placing the order:", error);
        res.status(500).json({ error: "Order placement failed" });
      });
  });

  // Route for fetching a specific user's orders
  router.get("/fetch-orders", (req, res) => {
      const user_id = req.query.user_id;
      const ordersQuery = query(collection(dbs, "orders"), where("user_id", "==", user_id));
  
      getDocs(ordersQuery)
          .then((ordersSnapshot) => {
              const orders = ordersSnapshot.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id
              }));
              res.status(200).json({ orders });
          })
          .catch((error) => {
              console.error("Error fetching the orders:", error);
              res.status(500).json({ error: "Fetching orders failed" });
          });
  });
  

  // Route for updating order status *Fix this not working*
  router.post("/delete-order", async (req, res) => {
    const order_id = req.body.order_id;
    console.log(order_id);

    // Correct way to get a reference to a document inside a collection
    const orderDocRef = doc(dbs, "orders", order_id); // Assuming your collection is named "orders"

    // Delete the document
    try {
        await deleteDoc(orderDocRef);
        res.status(200).send("Document successfully deleted!");
    } catch (error) {
        console.error("Error removing document: ", error);
        res.status(500).send("Error removing document");
    }
});


  return router;
};

module.exports = orderRoutes;
