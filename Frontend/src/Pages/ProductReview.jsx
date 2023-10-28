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
	if(userInfo === null)
	{
		alert("Login first!")
		return;
	}
    e.preventDefault();
    
    const reviewText = e.target[0].value;
    if (reviewText) {
      addReviewOfProduct(productId, reviewText, userInfo.email);
      e.target[0].value = "";
      setReviews((prev) => [
        ...prev,
        { comment: reviewText, email: userInfo.email },
      ]);
    }
  };

  return (
    <div className="ProductReview">
      <div className="container">
        <h1>Product Reviews</h1>

        <div className="review-form">
          <h2>Add a Review</h2>
          <form id="reviewForm" onSubmit={handleAddReview}>
            <label htmlFor="reviewText">Your Review:</label>
            <textarea className="p-2" id="reviewText" name="reviewText" required  style={{ cursor: 'text' }}></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>

        <div className="reviews">
          <h2>Current Reviews</h2>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>
                  <strong>Review : </strong> {review.comment}
                </p>
                <p>
                  <strong>~ </strong> {review.email}
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
