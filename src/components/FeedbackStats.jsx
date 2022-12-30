import React from 'react';
import FeedbackData from './feedbackData/feedbakdata';
import PropTypes from 'prop-types';
function FeedbackStats({ feedback }) {
  let avarge =
    feedback.reduce((acu, crr) => {
      return acu + crr.rating;
    }, 0) / feedback.length;

  avarge = avarge.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviewes </h4>
      <h4> Avarge Reating : {isNaN(avarge) ? 0 : avarge} </h4>
    </div>
  );
}
FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
