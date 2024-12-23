import React, { useState } from "react";
import { BsStarFill } from 'react-icons/bs';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState([
    { name: "Micheal", feedbackText: "I love the cozy atmosphere!", rating: 5 },
    { name: "Celine", feedbackText: "The cats are so adorable!", rating: 4 },
    { name: "Daniel", feedbackText: "Great place to relax and enjoy coffee with cats.", rating: 5 },
    { name: "Aiman", feedbackText: "The staff is friendly, and the cats are well-cared for.", rating: 5 },
    { name: "Catherine", feedbackText: "I had a purr-fect time at the cafe! Can't wait to visit again.", rating: 5 },
  ]);

  const handleSubmit = () => {
    const newFeedback = { name, feedbackText, rating };
    setFeedbacks([newFeedback, ...feedbacks]);
    setName("");
    setFeedbackText("");
    setRating(0);
  };

  return (
    <div className="feedback-page-wrapper">
      <h1 className="primary-heading">Tell us what you think</h1>

      <div className="feedback-form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Feedback"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Rating: </label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>Select a rating</option>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>
        <br></br>
        <br></br>
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="latest-feedbacks">
        <h2>Latest Feedbacks</h2>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <p>
              <strong>{feedback.name}</strong> - {feedback.feedbackText}{" "}
              {[...Array(feedback.rating)].map((_, i) => (
                <BsStarFill key={i} />
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;