import React, { FC } from 'react'
import { TypeItems, TypeItemsList } from '@/types'
import { CartItems } from '../CartItems/CartItems'

import styles from './CartList.module.scss'
import { Banners } from '../Banners/Banners'

export const CartList:FC<TypeItemsList> = ({items, onClickAdd}) => {
  return (
    <div className={styles.products}>
      <Banners/>
      {items.map(((item:TypeItems) => (
        <CartItems key={item.id} {...item} onClickAdd={onClickAdd}/>
      )))}
    </div>
  )
}
