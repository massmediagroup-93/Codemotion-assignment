import React from 'react'
import { render } from '@testing-library/react'
import Loader from './loader'

test('renders loader', () => {
  const { container } = render(<Loader />)
  expect(container.firstChild).toMatchInlineSnapshot(`
        <div
          class="loader"
        >
          <div
            class="loader__child loader__circle-1"
          />
          <div
            class="loader__child loader__circle-2"
          />
          <div
            class="loader__child loader__circle-3"
          />
          <div
            class="loader__child loader__circle-4"
          />
          <div
            class="loader__child loader__circle-5"
          />
          <div
            class="loader__child loader__circle-6"
          />
          <div
            class="loader__child loader__circle-7"
          />
          <div
            class="loader__child loader__circle-8"
          />
          <div
            class="loader__child loader__circle-9"
          />
          <div
            class="loader__child loader__circle-10"
          />
          <div
            class="loader__child loader__circle-11"
          />
          <div
            class="loader__child loader__circle-12"
          />
        </div>
  `)
})
