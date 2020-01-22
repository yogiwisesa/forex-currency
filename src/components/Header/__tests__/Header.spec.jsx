import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

const props = {
  currencyCode: 'USD', 
  currencyName: 'United States Dollar',
  amount: '10',
  onChange: jest.fn()
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header {...props}/>);
})

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should change input amount', () => {
  const spyOnChange = jest.spyOn(props, 'onChange');
  wrapper.find('[data-test="input-amount"]').simulate('change', {target: {value: '10'}});

  expect(spyOnChange).toHaveBeenCalledWith({target: {value: '10'}});
})