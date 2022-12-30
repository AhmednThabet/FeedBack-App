import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function Feedbackitem({ item, handleDelet }) { 
  // console.log(item.rating);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelet(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
