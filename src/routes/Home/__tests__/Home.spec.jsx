import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../';
import Header from '../../../components/Header';
import AddMoreButton from '../../../components/AddMoreButton';
import Card from '../../../components/Card';

const propsLoading = {
  forexRates: {
    loading: true,
    loaded: false,
    error: '',
    data: {}
  },
  fetchForexRatesAction: jest.fn(() => new Promise((resolve => resolve())))
}

const props = {
  forexRates: {
    loading: false,
    loaded: true,
    error: '',
    data: {
      rates: {
        CAD: 1.3056230319,
        HKD: 7.7698605488,
        ISK: 123.9766081871,
        PHP: 51.0022492128,
        DKK: 6.7228969861,
        HUF: 301.6824111561,
        CZK: 22.5515069726,
        GBP: 0.7650022492,
        RON: 4.2991452991,
        SEK: 9.4937471885,
        IDR: 13673.3153396311,
        INR: 71.196131354,
        BRL: 4.1980206928,
        RUB: 61.8353576248,
        HRK: 6.6914080072,
        JPY: 110.04048583,
        THB: 30.400359874,
        CHF: 0.9665317139,
        EUR: 0.8996851102,
        MYR: 4.0715249663,
        BGN: 1.7596041386,
        TRY: 5.9323436797,
        CNY: 6.9034637877,
        NOK: 8.9392712551,
        NZD: 1.5124606388,
        ZAR: 14.4758434548,
        USD: 1,
        MXN: 18.7309041835,
        SGD: 1.3489878543,
        AUD: 1.4554206028,
        ILS: 3.4552406658,
        KRW: 1167.8992352677,
        PLN: 3.8180836707
      },
      base: 'USD',
      date: '2020-01-21'
    }
  },
  fetchForexRatesAction: jest.fn(() => new Promise((resolve => resolve())))
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home {...props}/>);
});

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should show loading', () => {
  wrapper = shallow(<Home {...propsLoading}/>);

  expect(wrapper.find('.loading-text').length).toEqual(1);
});

test('Should change amount', () => {
  wrapper.find(Header).props().onChange({target: {value: '100'}});
  expect(wrapper.state('amount')).toEqual('100');
});

test('Should add and remove currency', () => {
  wrapper.find(AddMoreButton).props().onCurrencySelected('IDR');
  expect(wrapper.state('currencyCodes').length).toEqual(1);
  wrapper.find(AddMoreButton).props().onCurrencySelected('USD');
  expect(wrapper.state('currencyCodes').length).toEqual(2);

  wrapper.find(Card).at(0).props().onRemoveCurrency();
  expect(wrapper.state('currencyCodes').length).toEqual(1);
})