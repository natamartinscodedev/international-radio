import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import CardListSongs from './index'

describe('CardListSongs component', () => {
  beforeEach(() => {
    render(<CardListSongs items={''} />)
  })

  test('teste', () => {
    const teste = 'hello'
    expect(teste)
  })
})
