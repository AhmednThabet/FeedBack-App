import React from 'react';
import PropTypes from 'prop-types';
function Button({ children, version, type, isDisabeld }) {
  return (
    <button
      type={type}
      disabled={isDisabeld}
      className={`btn 
      btn-${version}
      `}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabeld: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabeld: PropTypes.bool,
};

export default Button;
