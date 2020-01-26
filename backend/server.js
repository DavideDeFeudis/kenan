const express = require('express')
const app = express()
const sendMail = require('./mail')

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*")
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*")
    res.set("ACCESS-CONTROL-ALLOW-METHODS", "*")
    next()
})

app.post("/contact", (req, res) => {

    const { email, name, subject, text } = req.body

    sendMail(email, name, subject, text, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error sending message. Try again later.' })
        }
        else {
            // need to set status?
            res.json({ message: 'Your message has been successfully sent!' })
        }
    })
})

app.listen(4000, () => console.log(`Listening on port 4000`))
