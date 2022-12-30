import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import { useState } from 'react';

function FeedbakForm({ handelAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = useState(''); 
  console.log(rating);
  const handelChanges = (e) => {
    if (text == '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text should be at least 10 characters ');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    // the line below is just when user change the text it will update the textState  to have the new value
    // setText(New text) and put it into text variable
    setText(e.target.value);
    // setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      handelAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you reate Our service? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handelChanges}
            type="text"
            value={text}
            placeholder=" Write A review "
          />
          <Button type="submit" isDisabeld={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message"> {message}</div>}
      </form>
    </Card>
  );
}
export default FeedbakForm;
