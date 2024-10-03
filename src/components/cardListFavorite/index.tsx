'use client'

import { useList } from '@/context/contextApi'
import { Disc, Pencil, Search, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AudioPlayer from '../audioPlayer'

interface typeItem {
  name: string
}

const CardListFavori = () => {
  const { state, removeItem, editItem } = useList()
  const [listItems, setListItems] = useState<string[]>([])
  const [search, setSearch] = useState<string>('')
  const [FilterSearch, setFilterSearch] = useState<string[]>([])
  const [playNow, setPlayNow] = useState<string>('')

  const handleEdit = (item: typeItem) => {
    editItem(item.name)
  }
  const handleDelit = (item: typeItem) => {
    removeItem(item.name)
  }

  const handleSearch = (e: string) => {
    setSearch(e)

    if (e) {
      const filterSerach = listItems.filter((item: any) =>
        item.name.toLowerCase().includes(e.toLowerCase())
      )

      setFilterSearch(filterSerach)
    } else {
      setFilterSearch(listItems)
    }
  }

  useEffect(() => {
    setListItems(state)
  }, [state])

  return (
    <div className="container_list-favorite">
      <div className="box_favorite-nameplay">
        <p>Favorite Radios</p>
        <div className="box_favorite-search">
          <Search />
          <input
            data-testid="search"
            type="text"
            placeholder="Search State"
            value={search}
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="box_lists-sected">
        <div className="box-separetion">
          <Disc />
          <p>{playNow}</p>
        </div>
        <ul className="box_list-array">
          {FilterSearch.length > 0
            ? FilterSearch.map((item: any, index) => (
                <li key={index}>
                  <AudioPlayer items={item} setPlayNow={setPlayNow} />
                  <div className="box_list-play-buttons">
                    <button onClick={() => handleEdit(item)}>
                      <Pencil />
                    </button>
                    <button
                      data-testid="btnDelit"
                      onClick={() => handleDelit(item)}
                    >
                      <Trash />
                    </button>
                  </div>
                </li>
              ))
            : listItems.map((item: any, index) => (
                <li key={index}>
                  <AudioPlayer items={item} setPlayNow={setPlayNow} />
                  <div className="box_list-play-buttons">
                    <button onClick={() => handleEdit(item)}>
                      <Pencil />
                    </button>
                    <button onClick={() => handleDelit(item)}>
                      <Trash />
                    </button>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default CardListFavori
