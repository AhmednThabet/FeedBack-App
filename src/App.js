import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import React from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './components/feedbackData/feedbakdata';
import FeedbakForm from './components/FeedbakForm';

function App() {
  const [feedbackData, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedbackData]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedbackData.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <FeedbakForm handelAdd={addFeedback} />
        <FeedbackStats feedback={feedbackData} />
        <FeedbackList feedback={feedbackData} handleDelet={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
