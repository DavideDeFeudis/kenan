const express = require('express')
const app = express()
const sendMail = require('./mail')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kenan', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection succeeded')
    } else {
        console.log('Error on DB connection: ' + err)
    }
});

const Customer = mongoose.model('Customer', new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    messages: [{ subject: String, text: String }],
    workshops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop'
    }]
}));

const Workshop = mongoose.model('Workshop', new mongoose.Schema({
    title: { type: String, required: true },
    // date: { type: Date, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
    info: { type: String },
    price: {
        priceLabel1: { type: String, required: true },
        priceLabel2: String,
        priceLabel3: String,
        priceLabel4: String,
        priceLabel5: String,
        priceLabel6: String,
        price1: { type: Number, required: true },
        price2: Number,
        price3: Number,
        price4: Number,
        price5: Number,
        price6: Number
    },
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }]
}));

// const Admin = mongoose.model('Admin', new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String },
// }));

app.use(express.json())

app.use((req, res, next) => {
    res.set('ACCESS-CONTROL-ALLOW-ORIGIN', '*')
    res.set('ACCESS-CONTROL-ALLOW-HEADERS', '*')
    res.set('ACCESS-CONTROL-ALLOW-METHODS', '*')
    next()
})

app.post('/contact', (req, res) => {
    console.log(req.body)
    const { email, name, subject, text } = req.body

    sendMail(email, name, subject, text, (err, data) => {
        if (err) {
            console.log('err:', err)
            res.status(500).json({ message: 'Error sending message. Try again later.' })
        }
        else {
            res.json({ message: 'Your message has been successfully sent!' })
        }
    })
})

app.post('/workshops', (req, res) => {
    console.log(req.body)
    let { email, firstName, lastName, subject, text } = req.body
    const name = `${firstName} ${lastName}`
    if (!text) {
        text = `From: ${name} ${email}`
    }
    sendMail(email, name, subject, text, (err, data) => {
        if (err) {
            console.log('err:', err)
            res.status(500).json({ message: 'Error signing up. Try again later.' })
        }
        else {
            res.json({ message: 'You signed up successfully!' })
        }
    })
})

app.get('/seed', (req, res) => {
    for (let i = 0; i < 3; i++) {
        let workshop = new Workshop({
            title: 'Flow Acrobatics Dresden',
            date: '11-12.04.2020 11:00-15:00',
            address: 'Dresdener Str. 24, 10445 Dresden',
            info: 'For professional dancers',
            price: {
                priceLabel1: 'Early bird until 04.04.2020: two days €',
                priceLabel2: '/ one day: €',
                priceLabel3: 'Normal price: two days €',
                priceLabel4: '/ one day: €',
                price1: 80,
                price2: 50,
                price3: 100,
                price4: 60,
            }
        })
        workshop.save()
        .then(() => res.send('Workshops seeded'))
        .catch(err => console.log(err))
    }
})

// ADMIN

app.get('/admin', (req, res) => {
    res.send([{
        id: 1,
        title: 'Flow Acrobatics Dresden',
        date: '11-12.04.2020 11:00-15:00',
        address: 'Dresdener Str. 24, 10445 Dresden',
        info: 'For professional dancers',
        price: {
            priceLabel1: 'Early bird until 04.04.2020: two days €',
            priceLabel2: '/ one day: €',
            priceLabel3: 'Normal price: two days €',
            priceLabel4: '/ one day: €',
            price1: 80,
            price2: 50,
            price3: 100,
            price4: 60,
        }
    }])
    // Workshop.find().then(workshops => res.send(workshops))
})

// app.post('/admin/workshops', (req, res) => {
// console.log(req.body)
// const { email, name, password } = req.body
// res.json({ message: 'You logged in.' })
// })

app.listen(4000, () => console.log(`Listening on port 4000`))
