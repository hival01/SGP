const { Schema, model } = require("mongoose");

const productData = model(
  "Product",
  new Schema({
    productId: { type: String, require: true },
    reviews: { type: Array, require: false },
  })
);

module.exports = productData;
