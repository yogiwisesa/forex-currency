import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({currencyCode, currencyName, amount, onChange}) => {
  return (
    <div className="header-container">
      <p className="currency-title">
        {currencyCode} - {currencyName}
      </p>
      <p className="currency-value">
        <span>{currencyCode}</span>
        <input 
          data-test="input-amount"
          value={amount}
          onChange={onChange}
          placeholder="amount..."/>
      </p>
    </div>
  );
};

Header.propTypes = {
  currencyCode: PropTypes.string,
  currencyName: PropTypes.string,
  amount: PropTypes.string,
  onChange: PropTypes.func
};

export default Header;
