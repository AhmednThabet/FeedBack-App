import React from 'react';
import Feedbackitem from './Feedbackitem';
import PropTypes from 'prop-types';
function FeedbackList({ feedback, handleDelet }) {
  if (!feedback || feedback === 0) {
    <p> No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <Feedbackitem key={item.id} item={item} handleDelet={handleDelet} />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
