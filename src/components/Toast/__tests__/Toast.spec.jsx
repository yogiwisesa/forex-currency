import React from 'react';
import { shallow } from 'enzyme';
import Toast from '../';

const props = {
  message: 'Error',
  show: true
}

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Toast {...props}/>);
})

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
})