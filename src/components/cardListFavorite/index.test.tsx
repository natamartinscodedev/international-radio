import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import CardListFavori from './index'
import { ListProvider } from '@/context/contextApi'

describe('CardListFavori component', () => {
  beforeEach(() => {
    render(
      <ListProvider>
        <CardListFavori />
      </ListProvider>
    )
  })

  test('input search', () => {
    const searchInput = screen.getByTestId('search')
    fireEvent.change(searchInput, { target: { value: 'California' } })
    expect(searchInput).toHaveValue('California')
  })
})
