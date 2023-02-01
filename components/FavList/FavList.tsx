import React, { FC } from 'react'
import { TypeItems, TypeItemsList } from '@/types'

import styles from './FavList.module.scss'
import { FavItems } from '../FavItems/FavItems'

export const FavList:FC<TypeItemsList> = ({items}) => {
  return (
    <div className={styles.favlist}>
      {items.map(((item:TypeItems) => (
        <FavItems key={item.id} {...item} />
      )))}
    </div>
  )
}
