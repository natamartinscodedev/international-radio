import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import AudioPlayer from './index'

describe('AudioPlayer component', () => {
  beforeEach(() => {
    render(<AudioPlayer items={''} setPlayNow={''} />)
  })

  test('teste', () => {
    const teste = 'hello'
    expect(teste)
  })
})
