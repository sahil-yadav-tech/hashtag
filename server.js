console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI❤️😍👏😊")
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/s', (req, res) => res.send('Hello World! 2'))

app.get("/health", (req, res) => {
    return res.status(200).json({
        message:"JAI SHREE RAM JI . JAI BAJARANG BALI JI 😍👏 My health is fine just becuse of you😊🥰😍"
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))