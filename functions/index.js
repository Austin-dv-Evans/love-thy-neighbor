const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createStripeCheckout = functions.https.onRequest(async (request, response) =>{
  response.set('Access-Control-Allow-Origin', "*")  

  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const { amount } = request.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd'
  });

  response.send({
      clientSecret: paymentIntent.client_secret
  })
});

