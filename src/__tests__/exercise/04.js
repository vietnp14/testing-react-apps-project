// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker';

const mockData = ({ username, password }) => ({
  username: username || faker.internet.userName(),
  password: password || faker.internet.password()
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);

  const { username, password } = mockData({ password: '1234' });

  userEvent.type(screen.getByLabelText('Username'), username);
  userEvent.type(screen.getByLabelText('Password'), password);

  const btnSubmit = screen.getByRole('button', { name: 'Submit' })
  userEvent.click(btnSubmit);
  console.log('Handle Submit value : ', handleSubmit.mockReturnValue())
  expect(handleSubmit).toHaveBeenCalledWith({ username, password });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
})

/*
eslint
  no-unused-vars: "off",
*/
