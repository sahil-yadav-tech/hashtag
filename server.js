console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI❤️😍👏😊")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/health", () => {
    return res.status(200).json({
        message:"JAI SHREE RAM JI . JAI BAJARANG BALI JI 😍👏 My health is fine"
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))