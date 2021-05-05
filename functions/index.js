const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin: true});
const stripe = require("stripe")(functions.config().stripe.secret_key);
const app = express();

app.use(cors);
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  try {
    const {amount} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "MY ERRROR",
    });
  }
});

// app.get("*", (req, res) => {
//   res.status(404).send("404, Not Found");
// });

exports.createStripeCheckout = functions.https.onRequest(app);

// exports.createStripeCheckout =
// functions.https.onRequest(async (request, response) => {
//   response.set("Access-Control-Allow-Origin", "http://localhost:4200")

//   const { amount } = request.body;
//   console.log(request.body)
//   console.log(amount)

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: 'usd'
//   });

//   cors(request, response, () => {
//     response.send({
//         clientSecret: paymentIntent.client_secret
//     })
//   })
// });
