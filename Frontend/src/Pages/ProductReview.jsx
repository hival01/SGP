import { useParams } from "react-router-dom";
import { addReviewOfProduct, getReviewOfProduct } from "../api/reviews";
import "./ProductReview.css";
import React from "react";

const ProductReview = () => {
	const { productId } = useParams();
	const [reviews, setReviews] = React.useState([]);

	React.useEffect(() => {
		getReviewOfProduct(productId).then((response) => {
			setReviews(response);
		});
	}, []);

	const handleAddReview = (e) => {
		e.preventDefault();
		addReviewOfProduct(productId, e.target[0].value,);
		// TODO:- Add Email here
		setReviews((prev) => [
			...prev,
			{ comment: e.target[0].value, email: "" },
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
						<li key={index}>{review.comment}</li>
					))}
				</ul>
			</div>
		</div>
		</div>
	);
};

export default ProductReview;
