import { useParams } from "react-router-dom";
import { addReviewOfProduct, getReviewOfProduct } from "../api/reviews";
import AuthService from "../services/AuthService"; 
import "./ProductReview.css";
import React, { useEffect, useState } from "react";

const ProductReview = () => {
	const { productId } = useParams();
	const [reviews, setReviews] = React.useState([]);
	const [userEmail, setUserEmail] = useState("");

	React.useEffect(() => {
		const userEmail = AuthService.getUserEmail();
		if (userEmail) {
			setUserEmail(userEmail);
		  }
		getReviewOfProduct(productId).then((response) => {
			setReviews(response);
		});
	}, []);



	const handleAddReview = (e) => {
		e.preventDefault();
		addReviewOfProduct(productId, e.target[0].value,userEmail);
		// TODO:- Add Email here
		setReviews((prev) => [
			...prev,
			{ comment: e.target[0].value, email: userEmail},
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
					<textarea
						id="reviewText"
						name="reviewText"
						required
					></textarea>
					<button type="submit">Submit Review</button>
				</form>
			</div>

			<div className="reviews">
				<h2>Current Reviews</h2>
				<ul>
					{reviews.map((review, index) => (

						<li key={index}> 
						<p><strong>Email:</strong> {review.email}</p>
						<p><strong>Comment:</strong> {review.comment}</p>
						</li>
					))}
					
					

				</ul>
			</div>
		</div>
		</div>
	);
};

export default ProductReview;
