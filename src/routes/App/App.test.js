import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App/>);
});

it('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('Should App-header class', () => {
  expect(wrapper.find('.App-header').length).toBeGreaterThan(0);
});
