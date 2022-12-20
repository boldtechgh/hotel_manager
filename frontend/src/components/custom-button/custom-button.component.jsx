import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, width, height, ...otherProps }) => (
  <button style={{width: width ? width : null, height: height ? height : null}} className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
