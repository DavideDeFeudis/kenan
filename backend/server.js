const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*")
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*")
    res.set("ACCESS-CONTROL-ALLOW-METHODS", "*")
    next()
})

app.post("/contact", (req, res) => {
    console.log(req.body)
    // let name = req.body.name
    res.send(req.body)
})

app.listen(3001, () => console.log(`Listening on port 3001`))
