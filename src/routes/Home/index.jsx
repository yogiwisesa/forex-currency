import React from 'react';
import { connect } from 'react-redux';

import { fetchForexRatesAction } from '../../redux/actions';
import { CURRENCIES, LS_CURRENCY } from '../../core/constants';

import Card from '../../components/Card';
import Toast from '../../components/Toast';
import Header from '../../components/Header';
import AddMoreButton from '../../components/AddMoreButton';

import './styles.scss';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      baseCurrency: 'USD',
      amount: '10',
      errorToastVisible: false,
      currencyCodes: []
    };
  }

  componentDidMount() {
    this.fetchForexRates();
    this.loadLocalstorage();
  }

  fetchForexRates() {
    this.props.fetchForexRatesAction().catch(() => {
      this.setState({
        errorToastVisible: true
      });
      this.hideToastIn();
    });
  }

  loadLocalstorage() {
    this.setState({
      currencyCodes: JSON.parse(localStorage.getItem(LS_CURRENCY)) || []
    })
  }

  hideToastIn(duration = 5000) {
    setTimeout(() => {
      this.setState({
        errorToastVisible: false
      });
    }, duration);
  }

  handleAmountChange = event => {
    const { value } = event.target;

    this.setState({
      amount: value
    });
  };

  handleCurrencySelected = code => {

    this.setState(
      prevState => ({
        currencyCodes: [
          ...prevState.currencyCodes,
          code,
        ]
      }),
      () => this.handleUpdateLocalStorage()
    );
  };

  handleRemoveCurrency = currencyIndex => {
    this.setState(
      prevState => ({
        currencyCodes: prevState.currencyCodes.filter(
          (item, index) => index !== currencyIndex
        )
      }),
      () => this.handleUpdateLocalStorage()
    );
  };

  handleUpdateLocalStorage = () => {
    localStorage.setItem(LS_CURRENCY, JSON.stringify(this.state.currencyCodes));
  };

  render() {
    const {
      amount,
      baseCurrency,
      currencyCodes,
      errorToastVisible
    } = this.state;
    const { forexRates } = this.props;

    return (
      <div className="home">
        <Header
          amount={amount}
          currencyCode={baseCurrency}
          onChange={this.handleAmountChange}
          currencyName={CURRENCIES[baseCurrency]}
        />

        <div className="currency-card-container">
          {forexRates.loaded && currencyCodes.map((currencyCode, index) => {
            return (
              <Card
                key={index.toString()}
                amount={amount}
                baseCurrency={baseCurrency}
                rates={forexRates.data.rates[currencyCode]}
                currencyCode={currencyCode}
                currencyName={CURRENCIES[currencyCode]}
                onRemoveCurrency={() => this.handleRemoveCurrency(index)}
              />
            );
          })}

          {forexRates.loading && <p className="loading-text">Loading rates...</p>}

          {currencyCodes.length < 1 && (
            <p className="no-currency">
              Uh, please add currency by click add more button below!
            </p>
          )}

          <AddMoreButton onCurrencySelected={this.handleCurrencySelected} />
        </div>

        <Toast message="Failed to load currency" visible={errorToastVisible} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forexRates: state.ForexRates.forexRates
});

const mapDispatchToProps = {
  fetchForexRatesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
