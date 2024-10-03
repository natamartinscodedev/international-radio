'use client'

import React from 'react'

interface typeItems {
  items: {
    name: string
  }
}

const CardListSongs = ({ items }: typeItems) => {
  return (
    <div className="card_list-song">
      <p>{items.name}</p>
    </div>
  )
}

export default CardListSongs
