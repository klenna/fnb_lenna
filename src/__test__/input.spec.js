import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Input from 'components/form/input'

import '@testing-library/jest-dom/extend-expect'

const renderPage = () => render(
  <Input
    __test__='input-simp'
    register={register}
    onEnter={handleSubmit}
  />,
)
let inputSR1

afterEach(() => {
  cleanup()
})

beforeEach(() => {
  const { getByTestId } = renderPage()
  inputSR1 = getByTestId('input-simp')
})

test('Render component as expected', () => {
  expect(inputSR1.value).toBeFalsy()
})
