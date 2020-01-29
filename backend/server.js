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

const cb = (req, res) => {
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
}

app.post("/contact", cb)
app.post("/workshops", cb)

app.listen(4000, () => console.log(`Listening on port 4000`))
