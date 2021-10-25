// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import { act } from 'react-dom/test-utils';

function CustomComponent ({ initialValue }) {
  const { count, increment, decrement } = useCounter({ initialCount: initialValue });

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}


test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  // let result
  // function TestComponent(props) {
  //   result = useCounter(props)
  //   return null
  // }
  // render(<TestComponent />)
  // expect(result.count).toBe(0);
  // act(() => result.increment());
  // expect(result.count).toBe(1);
  // act(() => result.decrement());
  // expect(result.count).toBe(0);

  let initialValue = 1;
  render(<CustomComponent initialValue={initialValue} />)
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const message = screen.getByText(/count/i)

  expect(message).toHaveTextContent(`Count: ${initialValue}`)

  userEvent.click(increment)
  expect(message).toHaveTextContent(`Count: ${initialValue+=1}`)

  userEvent.click(decrement)
  expect(message).toHaveTextContent(`Count: ${initialValue-=1}`)

  // const results = {}
  // function TestComponent(props) {
  //   Object.assign(results, useCounter())
  //   return null
  // }
  
})

test('exposes the count and asasf functions', () => {
 screen.debug()
  let initialValue = 1;
  render(<CustomComponent initialValue={initialValue} />)
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const message = screen.getByText(/count/i)

  expect(message).toHaveTextContent(`Count: ${initialValue}`)

  userEvent.click(increment)
  expect(message).toHaveTextContent(`Count: ${initialValue+=1}`)

  userEvent.click(decrement)
  expect(message).toHaveTextContent(`Count: ${initialValue-=1}`)

})

/* eslint no-unused-vars:0 */
