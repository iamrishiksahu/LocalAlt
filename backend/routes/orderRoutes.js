const express = require('express');
const { collection, doc, setDoc, getDoc, updateDoc } = require('firebase/firestore');

const router = express.Router();

const orderRoutes = (db) => {
  
  // Route for placing a new order
  router.post('/place-order', async (req, res) => {
    const { userId, items, totalAmount } = req.body;
    try {
      const orderRef = await setDoc(collection(db, 'orders'), {
        userId,
        items,
        totalAmount,
        status: 'pending',
        orderDate: new Date().toISOString(),
      });

      res.status(200).json({ message: 'Order placed successfully', orderRef });
    } catch (error) {
      console.error('Error placing the order:', error);
      res.status(500).json({ error: 'Order placement failed' });
    }
  });

  // Route for fetching a specific user's orders
  router.get('/fetch-orders/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const ordersSnapshot = await getDocs(query(collection(db, 'orders'), where('userId', '==', userId)));
      const orders = ordersSnapshot.docs.map(doc => doc.data());

      res.status(200).json({ orders });
    } catch (error) {
      console.error('Error fetching the orders:', error);
      res.status(500).json({ error: 'Fetching orders failed' });
    }
  });

  // Route for updating order status
  router.put('/update-order/:orderId', async (req, res) => {
    const orderId = req.params.orderId;
    const { status } = req.body;

    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status });

      res.status(200).json({ message: 'Order status updated successfully' });
    } catch (error) {
      console.error('Error updating the order status:', error);
      res.status(500).json({ error: 'Order status update failed' });
    }
  });

  return router;
};

module.exports = orderRoutes;
