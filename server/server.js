console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI❤️😍👏😊");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 9987;
console.log(port, process.env.PORT);

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({message:"Hello World!"});
});

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    stock: 25,
    brand: "Apple",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 74999,
    stock: 30,
    brand: "Samsung",
    rating: 4.7,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 124999,
    stock: 10,
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptop",
    price: 109999,
    stock: 8,
    brand: "Dell",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    stock: 15,
    brand: "Sony",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Boat Rockerz 550",
    category: "Headphones",
    price: 2499,
    stock: 50,
    brand: "Boat",
    rating: 4.3,
  },
  {
    id: 7,
    name: "iPad Air",
    category: "Tablet",
    price: 59999,
    stock: 12,
    brand: "Apple",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9",
    category: "Tablet",
    price: 64999,
    stock: 14,
    brand: "Samsung",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Nike Air Max",
    category: "Shoes",
    price: 8999,
    stock: 40,
    brand: "Nike",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Adidas Ultraboost",
    category: "Shoes",
    price: 10999,
    stock: 35,
    brand: "Adidas",
    rating: 4.7,
  },
  {
    id: 11,
    name: "LG 55-inch OLED TV",
    category: "Television",
    price: 89999,
    stock: 6,
    brand: "LG",
    rating: 4.8,
  },
  {
    id: 12,
    name: "Mi Smart TV 43",
    category: "Television",
    price: 28999,
    stock: 20,
    brand: "Xiaomi",
    rating: 4.4,
  },
  {
    id: 13,
    name: "Canon EOS R50",
    category: "Camera",
    price: 74999,
    stock: 7,
    brand: "Canon",
    rating: 4.7,
  },
  {
    id: 14,
    name: "PlayStation 5",
    category: "Gaming",
    price: 54999,
    stock: 10,
    brand: "Sony",
    rating: 4.9,
  },
  {
    id: 15,
    name: "Xbox Series X",
    category: "Gaming",
    price: 52999,
    stock: 9,
    brand: "Microsoft",
    rating: 4.8,
  },
];

app.get("/s", (req, res) => {
  return res.status(200).json({
    message: "Products datas",
    data: products,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health is fine",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
