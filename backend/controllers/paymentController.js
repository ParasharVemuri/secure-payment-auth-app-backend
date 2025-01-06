const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//console.log(razorpay);

const createOrder = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in the smallest currency unit (paise)
    currency: "INR",
    receipt: `receipt_order_${Math.random() * 1000000}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send("Error in creating order: " + error.message);
  }
};

module.exports = { createOrder };
