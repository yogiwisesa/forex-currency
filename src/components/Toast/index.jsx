import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Toast = ({ message, visible }) => (
  <div className={`toast-container${visible ? ' show' : ''}`}>
    <p>{message}</p>
  </div>
);

Toast.propTypes = {
  message: PropTypes.string
};

export default Toast;
