// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const element = document.createElement('div');
  document.body.append(element);
  ReactDOM.render(<Counter />, element);
  const [decreaseBtn, increaseBtn] = element.querySelectorAll('button');
  const message = element.firstChild.querySelector('div');

  const increaseME = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  });

  const decreaseME = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  });

  expect(message.textContent).toBe('Current count: 0');

  increaseBtn.dispatchEvent(increaseME);
  expect(message.textContent).toBe('Current count: 1');

  decreaseBtn.dispatchEvent(decreaseME);
  expect(message.textContent).toBe('Current count: 0');

  element.remove();
})

/* eslint no-unused-vars:0 */
