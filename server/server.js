const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

//Middlewares
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

//Stripe Checkout Implementation
const stripe = require('stripe')('sk_test_51MieJTExOuRzEOei54rp1sF0La9Cs9Dn51BjVpphdDgy8G6tocCmd0plEjtmUgcDGVUbbb3he588d3s6GDeEI4SQ00sCMXpNnO');

app.post('/checkout', async (req, res, next) => {
    try {
        const purchasedItems = req.body.items;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 0,
                            currency: 'usd',
                        },
                        display_name: 'Free shipping',
                        // Delivers between 5-7 business days
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 7,
                            },
                        }
                    }
                },
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 1500,
                            currency: 'usd',
                        },
                        display_name: 'Next day air',
                        // Delivers in exactly 1 business day
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 1,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 1,
                            },
                        }
                    }
                },
            ],
            line_items: purchasedItems.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.product],
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity
            })),
            mode: 'payment',
            success_url: 'http://localhost:4242/success.html',
            cancel_url: 'http://localhost:4242/cancel.html'
        })
        res.sendStatus(200).json(session);
    } catch { error => next(error) };
});

const PORT = 4242;

app.listen(PORT, console.log('App is running on port ' + PORT))