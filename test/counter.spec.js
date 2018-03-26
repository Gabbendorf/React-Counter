import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Counter } from '../src/counter'

test('renders without crashing', () => {
  mount(<Counter />);
})

test('renders a button component', () => {
  const counter = shallow(<Counter />);
  const button = counter.find("button");

  expect(button.text()).toBe("+1");
});

test('initial count value is zero', () => {
  const counter = shallow(<Counter />);
  const h1 = counter.find("h1");

  expect(h1.text()).toBe("0");
});

test('sets updated count', () => {
  const counter = shallow(<Counter />);
  counter.find("button").simulate("click");

  const h1 = counter.find("h1");

  expect(h1.text()).toBe("1");
});
