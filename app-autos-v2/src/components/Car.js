import React from 'react';

const style = {
  color: '#f1f1f1',
  background: '#45a',
  width: '40%',
  margin: '5px auto',
  padding: '8px 8px',
  listStyleType: 'none',
};

const Car = ({ color, children }) => {
  let infoColor;
  if (color) {
    infoColor = color;
  } else {
    infoColor = ' No information about the color';
  }

  return (
    children && (
      <ul style={style}>
        <li>Brand : {children}</li>
        <li>{infoColor}</li>
      </ul>
    )
  );
};

export default Car;
