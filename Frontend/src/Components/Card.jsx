import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
	const style = {
		width: "18rem",
	};

	const navigate = useNavigate();

	return (
		<>
			<div className="col-sm">
				<div
					className="card h-90 .hover-overlay text-white bg-dark mb-3"
					style={style}
				>
					<img
						src={props.photo}
						className="card-img-top"
						alt="Card Photo"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.desc}</p>
						<button
							onClick={() =>
								navigate(`/product-review/${props.id}`)
							}
							className="btn btn-primary"
						>
							Give Review
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
