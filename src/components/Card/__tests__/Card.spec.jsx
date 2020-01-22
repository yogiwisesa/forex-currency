import React from 'react';
import { shallow } from 'enzyme';
import Card from '../';

const props = {
  baseCurrency: 'USD',
  currencyCode: 'IDR',
  currencyName: 'Indonesian Rupiah',
  rates: 13000,
  amount: '10',
  onRemoveCurrency: jest.fn()
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Card {...props} />);
});

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should calculate amount correctly', () => {
  const expectedAmount = `${props.rates * parseInt(props.amount)}`;
  expect(wrapper.find('[data-test="converted-amount"]').text()).toEqual(expectedAmount);
});

test('Should trigger removeCurrency', () => {
  const spyOnRemoveCurrency = jest.spyOn(props, 'onRemoveCurrency');
  wrapper.find('.right-side').simulate('click');
  expect(spyOnRemoveCurrency).toHaveBeenCalled();
})