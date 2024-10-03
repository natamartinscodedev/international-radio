'use client'

import { useState } from 'react'
import React, { useEffect } from 'react'
import { GetDate } from '@/utils/getDate'
import CardListSongs from '@/components/CardListSongsProps/index'
import { useList } from '@/context/contextApi'

const CardSearch = () => {
  const { state, addItem, removeItem, editItem } = useList()
  const [search, setserch] = useState('')
  const [item, setItem]: any = useState('')
  const [filterSearch, setFliterSearch]: any = useState('')

  const handleClick = (item: any) => {
    addItem(item)
  }

  async function fetchData() {
    try {
      const date = await GetDate(
        'https://de1.api.radio-browser.info/json/stations/search?limit=10'
      )

      setItem(date)
      setFliterSearch(date)
    } catch (err) {
      console.error('Error fetching data ==>', err)
    }
  }

  const handleSearch = (e: string) => {
    setserch(e)

    if (e) {
      const filtered = item.filter((item: any) =>
        item.name.toLowerCase().includes(e.toLowerCase())
      )
      setFliterSearch(filtered)
    } else {
      setFliterSearch(item)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container_card-serach">
      <input
        type="text"
        name="searhc"
        id="search"
        value={search}
        onChange={e => handleSearch(e.target.value)}
        placeholder="Search here"
      />
      <div className="box_list">
        {filterSearch.length > 0 ? (
          filterSearch.map((item: any, index: any) => (
            <>
              <div onClick={() => handleClick(item)} key={index}>
                <CardListSongs items={item} />
              </div>
            </>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  )
}

export default CardSearch
