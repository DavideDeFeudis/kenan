const express = require('express')
const app = express()
const sendMail = require('./mail')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*")
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*")
    res.set("ACCESS-CONTROL-ALLOW-METHODS", "*")
    next()
})

app.post("/contact", (req, res) => {

    const { email, name, text } = req.body

    sendMail(email, name, text, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Internal error' })
        }
        else {
            res.json({ message: 'message received' })
        }
    })
})

app.listen(4000, () => console.log(`Listening on port 4000`))
