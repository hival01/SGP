const asyncHandler = require("express-async-handler");
const productModel = require("../models/Product");

//@desc get all reviews
//@route GET /api/products/:id
//@access public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await productModel.findOne({ productId: req.params.id });
  res.json(reviews);
});

//@desc create new Review
//@route POST /api/products/:id
//@access public
const createReview = asyncHandler(async (req, res) => {
  try {
    const { comment, email } = req.body;
    const review = { comment, email };
    const pId = req.params.id;
    let product = await productModel.findOne({ productId: pId });
    if (!email) {
      res.json({ error: "email required" });
      return;
    }
    if (!product) {
      product = new productModel({ productId: pId });
      await product.save();
      product.reviews.push(review);
      await product.save();
      res.json(product);
    } else {
      product.reviews.push(review);
      await product.save();
      res.json(product);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = { getReviews, createReview };
