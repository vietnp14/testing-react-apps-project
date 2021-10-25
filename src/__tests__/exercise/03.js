// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import userEvent from '@testing-library/user-event'
import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  const increment = screen.getByRole('button', { name: 'Increment' });
  const decrement = screen.getByRole('button', { name: 'Decrement' });
  const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
