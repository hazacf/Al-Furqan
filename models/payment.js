const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    amount: { type: Number, default: 50 },
    paymentDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    consecutiveMissedYears: { type: Number, default: 0 }
});

module.exports = mongoose.model('Payment', paymentSchema);