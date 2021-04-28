const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createStripeCheckout = functions.https.onRequest((request, response) =>{
  const stripe = require("stripe")(functions.config().stripe.secret_key);

  const session = stripe.checkout.sessions.create({

  });
  app.post('', async (req, res) => {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
          amount: 1,
          currency: 'usd'
      })
  })
});
