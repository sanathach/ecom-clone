const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NPhEnSEqpYxAZblyuoQMzbZ1AIRhzpDmagVtrhvlMzwLN5ZPETDj8OdgOOjtX04OGR5W3TvB6GHR2CXdRcp72xv00ghHyJCih"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/sanath", (request, response) => response.status(200).send("HELLO SANATH ACHARYA 4SO21MC036 "));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://127.0.0.1:5001/challenge-762a1/us-central1/api
