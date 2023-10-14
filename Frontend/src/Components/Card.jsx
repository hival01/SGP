import React from "react";

export const Card = (props) => {
  const style = {
    width: "18rem",
  };
  return (
    <>
      <div className="col-sm">
        <div
          className="card h-90 .hover-overlay text-white bg-dark mb-3"
          style={style}
        >
          <img src={props.photo} className="card-img-top" alt="Card Photo" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <a href="#" className="btn btn-primary">
              Give Review
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
