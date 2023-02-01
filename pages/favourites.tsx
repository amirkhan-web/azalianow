import React, { FC } from 'react'

import { useAppSelector } from "@/hooks";
import { FavList } from '@/components/FavList/FavList';

const Favourites:FC = () => {
  const favourite = useAppSelector((state) => state.favourite.favourite)

  return (
    <div className='container'>
      <h1 className='fav'>Favourite Page</h1>
      {favourite.length && <FavList items={favourite}/>}
    </div>
  )
}

export default Favourites