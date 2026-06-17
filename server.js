console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI❤️😍👏😊")


const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(port,process.env.PORT );


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/s", (req, res) => {
    res.send("Hello World! 2 rs");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Health is fine"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});