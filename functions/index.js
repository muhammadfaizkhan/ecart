const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')('sk_test_51IZNeRHdZDj62jxBgtv12RLPaNTDXNbk4X11Cbsjp6pHnb26kpeMJVdCFpbklMeRFoBLHsfccXb2odI7Atfj5zLX00IRGqFp7i')

const app = express()

app.use(cors({origin: true}))
app.use(express.json())

app.get('/', (request, repsonse) => res.status(200).send('Hellow APp'))
app.post('/payments/create', async(request, response) => {
    const total = request.query.total
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    repsonse.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
exports.api = functions.https.onRequest(app)