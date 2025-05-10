const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Add this middleware to serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// MongoDB Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Hz:tCdYf1HGGDnf8NSU@payment.ac1foeh.mongodb.net/?retryWrites=true&w=majority&appName=Payment";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

// Routes
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Payment System!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});