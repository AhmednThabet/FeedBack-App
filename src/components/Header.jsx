import React from 'react';

function Header({ text, PGColor, textColor }) {
  const headerstyl = {
    backgroundColor: PGColor,
    color: textColor,
  };
  return (
    <header style={headerstyl}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: 'FeedBack UI',
  PGColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

export default Header;
