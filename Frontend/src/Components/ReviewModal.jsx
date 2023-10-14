// ReviewModal.js
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const ReviewModal = ({ isOpen, onClose, onSave }) => {
  const [reviewText, setReviewText] = useState("");

  const handleSave = () => {
    onSave(reviewText);
    setReviewText("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Review Modal"
    >
      <h2>Write Your Review</h2>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Enter your review here..."
        rows="4"
        cols="50"
      ></textarea>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default ReviewModal;