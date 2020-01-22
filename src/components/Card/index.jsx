import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = ({baseCurrency, currencyCode, currencyName, rates, amount, onRemoveCurrency}) => {

  const convertedAmount = rates * parseFloat(amount || 0);
  return (
    <div className="card-container">
      <div className="left-side">
        <p><span>{currencyCode}</span> <span data-test="converted-amount">{convertedAmount}</span></p>
        <p>{currencyCode} - {currencyName}</p>
        <p>1 {baseCurrency} = {currencyCode} {rates}</p>
      </div>
      <div className="right-side" onClick={onRemoveCurrency}>
        <p>( - )</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  baseCurrency: PropTypes.string,
  currencyCode: PropTypes.string,
  currencyName: PropTypes.string,
  rates: PropTypes.number,
  amount: PropTypes.string
}

export default Card;