const express = require('express');
const { createOrder } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect the payment route to ensure only authenticated users can create orders
router.post('/create-order', protect, createOrder);

module.exports = router;
