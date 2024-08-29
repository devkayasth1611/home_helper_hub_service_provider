import React, { useState } from 'react';
import "../App.css";

function Review() {
  const [rating, setRating] = useState(0); // State to store the selected rating
  const [hover, setHover] = useState(0); // State to manage hover effect for stars

  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center">
          <h2 className="title1">Review Form</h2>
        </div>
        <div className="card-body">
          <form>
            {/* Star Rating */}
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <div id="rating" className="d-flex">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        style={{ display: 'none' }}
                      />
                      <i
                        className={`fa-star ${ratingValue <= (hover || rating) ? 'fas' : 'far'}`}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{ cursor: 'pointer', fontSize: '24px', marginRight: '8px', color: '#f9b116', }}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Comment */}
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="4"
                placeholder="Enter your comment"
                required
              ></textarea>
            </div>

            {/* Review Date */}
            <div className="mb-3">
              <label htmlFor="reviewDate" className="form-label">Review Date</label>
              <input type="date" className="form-control" id="reviewDate" required />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
