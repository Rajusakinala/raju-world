const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("DB Connected");
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home route");
});
const authRoute = require("./routes/auth");
app.use("/api/v1/user", authRoute);

const detailsRoute = require("./routes/details");
app.use("/api/v1/user-details", detailsRoute);

// const postsRoute = require("./routes/posts");
// app.use("/api/v1/posts", postsRoute);

const products = [
  {
    productId: "1",
    productCategory: "Mobile",
    productName: "Redmi note 13 pro plus",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "2",
    productCategory: "Mobile",
    productName: "Redmi note 12 pro plus",
    productPrice: 19000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/Redmi%20note%2012%20pro%20plus-one_one.png?VersionId=O7Gp8GPinHvJHa_xXQZiNIHaDmwVWuqC",
  },
  {
    productId: "3",
    productCategory: "Mobile",
    productName: "Redmi note 11 pro plus",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "4",
    productCategory: "Mobile",
    productName: "Redmi note 13 pro",
    productPrice: 15000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "5",
    productCategory: "Mobile",
    productName: "Redmi note 5 pro",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "6",
    productCategory: "Mobile",
    productName: "Redmi note 6 pro",
    productPrice: 14999,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "7",
    productCategory: "Mobile",
    productName: "Redmi note 7 pro plus",
    productPrice: 11000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "8",
    productCategory: "Mobile",
    productName: "Redmi note 8 pro",
    productPrice: 10000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "9",
    productCategory: "Mobile",
    productName: "Redmi note 9 pro plus",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "10",
    productCategory: "Mobile",
    productName: "Redmi note 10 pro plus",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "11",
    productCategory: "Mobile",
    productName: "Redmi note 11 pro plus",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://cdn1.smartprix.com/rx-incYGaGkq-w1200-h1200/ncYGaGkq.jpg",
  },
  {
    productId: "12",
    productCategory: "Mobile",
    productName: "Redmi note 12 pro",
    productPrice: 20000,
    productCurrency: "INR",
    productDesc: "this mobile has great features",
    productImage:
      "https://i02.appmifile.com/433_operator_sg/20/03/2023/f83b78c002f27b9dd40c646d671c3fd3.png",
  },
];
// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get one product
app.get("/products/:productId", (req, res) =>
  res.json(products.find((obj) => obj.productId == req.params.productId))
);

app.listen(process.env.PORT, () => console.log("server running on port 4000"));
