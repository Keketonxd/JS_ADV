const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const { stringify } = require('querystring');

var corsOptions = {
    origin: "http://localhost:8080"
};
// без этого правда не работало)
const app = express();
app.use(cors(corsOptions));

app.use(cors())
app.use(bodyParser.json());

app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{ "result": 0 }')
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            cart.push(item);

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    })
})

app.post('/deleteFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{ "result": 0 }')
        } else {
            const cart = JSON.parse(data);
            const item = req.body.product_name;
            for (let i = 0; i <= cart.length; i++) {
                if (cart[i].product_name === item) {
                    cart.splice(i, 1);
                    break
                }
            }

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    })
})

app.get('/catalogData', (req, res) => {
    fs.readFile('./database/catalog.json', 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.get('/cartData', (req, res) => {
    fs.readFile('./database/cart.json', 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.listen(3000, () => { })
