import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

test('Page', () => {
  render(<div>Hello World</div>)
  expect(screen.getByText('Hello World')).toBeTruthy()
})