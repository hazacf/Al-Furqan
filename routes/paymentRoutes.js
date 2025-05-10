const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// Add Payment
router.post('/', async (req, res) => {
    const { userEmail, dueDate } = req.body;
    try {
        const payment = new Payment({ userEmail, dueDate });
        await payment.save();
        res.status(201).send(payment);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get All Payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.send(payments);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Reminder Logic (to be implemented later)
router.get('/reminders', (req, res) => {
    res.send('Reminder logic will go here.');
});

module.exports = router;