import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import CardSearch from './index'
import { ListProvider } from '@/context/contextApi'

describe('CardSearch component', () => {
  beforeEach(() => {
    render(
      <ListProvider>
        <CardSearch />
      </ListProvider>
    )
  })

  test('teste', () => {
    const teste = 'hello'
    expect(teste)
  })
})
