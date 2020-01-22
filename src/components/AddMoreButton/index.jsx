import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../core/constants';

import './styles.scss';

class AddMoreButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputFormVisible: false,
      searchKeyword: ''
    };
  }

  handleInputFormVisible = () => {
    this.setState({
      inputFormVisible: true
    });
  };

  handleSearchKeywordChange = event => {
    const { value } = event.target;

    this.setState({
      searchKeyword: value
    });
  };

  filterCurrencies = searchKeyword => {
    return Object.entries(CURRENCIES).filter(currency => {
      const [code, name] = currency;
      return `${code} ${name}`
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
    });
  };

  handleCurrencySelected = filteredCurrencies => {
    if (filteredCurrencies.length === 1) {
      this.props.onCurrencySelected(filteredCurrencies[0][0]);
      this.doResetState();
    }
  };

  handleCurrencyClick = code => {
    this.props.onCurrencySelected(code);
    this.doResetState();
  };

  doResetState = () => {
    this.setState({
      inputFormVisible: false,
      searchKeyword: ''
    });
  };

  render() {
    const { inputFormVisible, searchKeyword } = this.state;

    const filteredCurrencies = this.filterCurrencies(searchKeyword);

    return (
      <div className="add-more-button-container">
        {inputFormVisible ? (
          <React.Fragment>
            <div className="input-form">
              <input
                data-test="keyword-textinput"
                onChange={this.handleSearchKeywordChange}
                value={searchKeyword}
                onKeyDown={event =>
                  event.key === 'Enter' &&
                  this.handleCurrencySelected(filteredCurrencies)
                }
              />
              <button
                data-test="submit-button"
                onClick={() => this.handleCurrencySelected(filteredCurrencies)}
              >
                SUBMIT
              </button>
            </div>

            <div className="select-currencies-container">
              {filteredCurrencies.map((currency, index) => {
                const [code, name] = currency;

                return (
                  <p
                    data-test="currency-item"
                    key={index.toString()}
                    className={filteredCurrencies.length === 1 ? 'active' : ''}
                    onClick={() => this.handleCurrencyClick(code)}
                  >
                    {code} - {name}
                  </p>
                );
              })}
            </div>
          </React.Fragment>
        ) : (
          <button data-test="form-toggle" onClick={this.handleInputFormVisible}>
            (+) Add More Currencies
          </button>
        )}
      </div>
    );
  }
}

AddMoreButton.propTypes = {
  onCurrencySelected: PropTypes.func
}

export default AddMoreButton;
