const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createStripeCheckout = functions.https.onRequest(async (request, response) =>{
  const stripe = require("stripe")(functions.config().stripe.secret_key);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: 'http://localhost:4200/success',
    cancel_url: 'http://localhost:4200/cancel',
    line_items: [
        {
            quantity: 1,
            price_data: {
                currency: 'usd',
                unit_amount: (100) * 100,
                product_data: {
                    name: "New Camera",
                },
            },
        },
    ]
  });

  return {
      id: session.id,
  }
});
 
//   app.post('', async (req, res) => {
//       const { amount } = req.body;
//       const paymentIntent = await stripe.paymentIntents.create({
//           amount: 1,
//           currency: 'usd'
//       })
//   })
// });
