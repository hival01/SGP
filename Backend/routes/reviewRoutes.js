const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/reviewController');

router.route('/:id').get(getReviews).post(createReview);

module.exports = router;