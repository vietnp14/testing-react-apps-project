// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import EasyButton from '../../components/easy-button'
import { ThemeProvider } from '../../components/theme'

test('renders with the light styles for the light theme', () => {
  const { rerender }= render(
    <ThemeProvider initialTheme="dark">
      <EasyButton>Easy</EasyButton>
    </ThemeProvider>
  )
  const button = screen.getByRole('button', {name: /easy/i})
  rerender(
    <ThemeProvider>
      <EasyButton>Easy</EasyButton>
    </ThemeProvider>
  )
  screen.debug()
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

// test('renders with the dark styles for the dark theme', () => {
//   render(<EasyButton>Easy</EasyButton>, { theme: 'dark' })
//   const button = screen.getByRole('button', {name: /easy/i})
//   expect(button).toHaveStyle(`
//     background-color: black;
//     color: white;
//   `)
// })

/* eslint no-unused-vars:0 */
