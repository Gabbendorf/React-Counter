import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Counter } from '../src/counter'

let counter

beforeEach(() => {
  counter = shallow(<Counter />)
})

test('renders without crashing', () => {
  mount(<Counter />);
})

test('renders a button component', () => {
  const button = counter.find("button");

  expect(button.text()).toBe("+1");
});

test('initial count value is zero', () => {
  const h1 = counter.find("h1");

  expect(h1.text()).toBe("0");
});

test('sets updated count', () => {
  counter.find("button").simulate("click");

  const h1 = counter.find("h1");

  expect(h1.text()).toBe("1");
});
