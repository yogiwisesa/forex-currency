import React from 'react';
import { shallow } from 'enzyme';
import AddMoreButton from '../';

const props = {
  onCurrencySelected: jest.fn()
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AddMoreButton {...props} />);
});

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should open currencies dropdown', () => {
  expect(wrapper.state('inputFormVisible')).toEqual(false);
  wrapper.find('[data-test="form-toggle"]').simulate('click');
  expect(wrapper.state('inputFormVisible')).toEqual(true);
});

test('Should trigger onCurrencySelected when list click', () => {
  //-- Open form
  wrapper.find('[data-test="form-toggle"]').simulate('click');

  const spyOnCurrencySelected = jest.spyOn(
    wrapper.instance().props,
    'onCurrencySelected'
  );

  wrapper
    .find('[data-test="currency-item"]')
    .at(0)
    .simulate('click');
  expect(spyOnCurrencySelected).toHaveBeenCalledWith('IDR');
});

test('Shoud filter currencies & select currency', () => {
  const spyOnCurrencySelected = jest.spyOn(
    wrapper.instance().props,
    'onCurrencySelected'
  );

  //-- Open form
  wrapper.find('[data-test="form-toggle"]').simulate('click');

  wrapper.find('[data-test="keyword-textinput"]').simulate('change', {target: {value: 'IDR'}});
  expect(wrapper.find('[data-test="currency-item"]').length).toEqual(1);

  wrapper.find('[data-test="submit-button"]').simulate('click');

  expect(spyOnCurrencySelected).toHaveBeenCalledWith('IDR');
});
