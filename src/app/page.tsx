'use client'

import CardListFavorit from '@/components/cardListFavorite'
import CardSearch from '@/components/cardSearch'
import { Menu } from 'lucide-react'

export default function Home() {
  return (
    <main className="contaner_main">
      <section className="container_list">
        <p className="icon_menu">
          <Menu />
        </p>
        <CardSearch />
      </section>
      <section className="container_content">
        <h2>Radio Browser</h2>
        <div className="box_list-favorit">
          <CardListFavorit />
        </div>
      </section>
    </main>
  )
}
