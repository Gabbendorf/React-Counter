import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Counter } from '../src/app'

test('renders without crashing', () => {
  mount(<Counter />);
})

test('initial count value is zero', () => {
  const counter = ReactDOM.render(
    <Counter />,
    document.createElement('div')
  );

  expect(counter.state.count).toBe(0);
});

test('sets updated count', () => {
  const counter = ReactDOM.render(
    <Counter />,
    document.createElement('div')
  );
  counter.onClick();

  expect(counter.state.count).toBe(1);
});
