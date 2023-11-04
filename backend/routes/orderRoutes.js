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
  router.delete("/delete-order/:order_id", async (req, res) => {
    const orderId = req.query.order_id;
    try {
        // Query for the document with the matching order_id field
        const querySnapshot = await db.collection('orders').where('order_id', '==', orderId).get();

        if (querySnapshot.empty) {
            return res.status(404).json({ message: "No matching order found" });
        }

        // Assuming there's only one order with this order_id
        const orderDoc = querySnapshot.docs[0];

        await db.collection('orders').doc(orderDoc.id).delete();
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error("Error deleting the order:", error);
        res.status(500).json({ error: "Deleting order failed" });
    }
});


  return router;
};

module.exports = orderRoutes;
