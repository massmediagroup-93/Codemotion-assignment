import React from 'react'
import { render } from '@testing-library/react'
import CryptoCompare from './crypto-compare'

test('renders crypto compare', () => {
  const { getByText } = render(<CryptoCompare />)
  const heading = getByText(/Finixio - React.js tech test/i)
  expect(heading).toBeInTheDocument()
})
