import { useParams } from "react-router-dom";
import {
  addReviewOfProduct,
  getReviewOfProduct,
  getIdOfUser,
} from "../api/reviews";
import "./ProductReview.css";
import React, { useEffect, useState } from "react";

const ProductReview = ({ userInfo }) => {
  const { productId } = useParams();
  const [reviews, setReviews] = React.useState([]);
  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    getIdOfUser(productId).then((response) => {
      setUserEmail(response.email);
    });
    getReviewOfProduct(productId).then((response) => {
      setReviews(response);
    });
  }, []);

  const handleAddReview = (e) => {
    console.log(userInfo);
	if(userInfo === null)
	{
		alert("Login first!")
		return;
	}
    e.preventDefault();
    addReviewOfProduct(productId, e.target[0].value, userInfo.email);
    setReviews((prev) => [
      ...prev,
      { comment: e.target[0].value, email: userInfo.email },
    ]);
  };

  return (
    <div className="ProductReview">
      <div className="container">
        <h1>Product Reviews</h1>

        <div className="review-form">
          <h2>Add a Review</h2>
          <form id="reviewForm" onSubmit={handleAddReview}>
            <label htmlFor="reviewText">Your Review:</label>
            <textarea id="reviewText" name="reviewText" required></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>

        <div className="reviews">
          <h2>Current Reviews</h2>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>
                  <strong>Email:</strong> {review.email}
                </p>
                <p>
                  <strong>Comment:</strong> {review.comment}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
