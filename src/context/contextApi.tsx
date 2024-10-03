'use client'

import React, { createContext, useReducer, useContext, ReactNode } from 'react'

const ListContext = createContext<any>(null)
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'

const listReducer = (state: any[], action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      return state.filter(item => item.name !== action.payload.name)
    case EDIT_ITEM:
      return state.map(item =>
        item.name === action.payload.name
          ? { ...item, ...action.payload }
          : item
      )
    default:
      return state
  }
}

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(listReducer, [])

  const addItem = (item: any) => {
    dispatch({ type: ADD_ITEM, payload: item })
  }

  const removeItem = (name: number) => {
    dispatch({ type: REMOVE_ITEM, payload: { name } })
  }

  const editItem = (item: any) => {
    dispatch({ type: EDIT_ITEM, payload: item })
  }

  return (
    <ListContext.Provider value={{ state, addItem, removeItem, editItem }}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = () => {
  return useContext(ListContext)
}
