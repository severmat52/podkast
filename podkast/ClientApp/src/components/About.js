import React from 'react';

export default props => (
  <div>
      <p style={pStyle}>This is a hobby project built by </p>
      <a style={marginStyle} href="https://github.com/severmat52">severmat52</a>
  </div>
);

const marginStyle ={
  marginLeft: '10%',
  marginTop: '20%'
};

const pStyle ={
  ...marginStyle,
  color: 'white'
};