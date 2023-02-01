import React, { FC, useState } from 'react'

import { TypeItems } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import hit from '../../assets/images/hit.png';

import styles from './CartItems.module.scss'

export const CartItems:FC<TypeItems> = ({id, name, price, isHit, images, onClickAdd}) => {
  const [isCart, setIsCart] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const onAddToFavourite = () => {
    const newItem = {
      id,
      name,
      price,
      isHit,
      images
    }

    onClickAdd!(newItem)
    setIsActive(!isActive)
  }

  return (
    <div className={styles.product__item}>
      {isHit === 300 && <Image className={styles.product__hit} width={64} height={24} src={hit} alt="hit"/>}
      <Image className={styles.product__images} width={220} height={220} src={images} alt="Monitor"/>
      <div>
        <div className={styles.product__stars}>
          <span className={styles.product__type}>electronics</span>
          {isHit === 300 && <div>
            <svg width="86" height="14" viewBox="0 0 86 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z" fill="#F26A61"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M25 0L26.6189 5.12352L32 5.08673L27.6216 8.21419L29.3233 13.3101L25 10.1183L20.6767 13.3101L22.3784 8.21419L18 5.08673L23.3811 5.12352L25 0Z" fill="#F26A61"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M43 0L44.6189 5.12352L50 5.08673L45.6216 8.21419L47.3233 13.3101L43 10.1183L38.6767 13.3101L40.3784 8.21419L36 5.08673L41.3811 5.12352L43 0Z" fill="#F26A61"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M61 0L62.6189 5.12352L68 5.08673L63.6216 8.21419L65.3233 13.3101L61 10.1183L56.6767 13.3101L58.3784 8.21419L54 5.08673L59.3811 5.12352L61 0Z" fill="#F26A61"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M79 0L80.6189 5.12352L86 5.08673L81.6216 8.21419L83.3233 13.3101L79 10.1183L74.6767 13.3101L76.3784 8.21419L72 5.08673L77.3811 5.12352L79 0Z" fill="#F26A61"/>
            </svg>
            <Link className={styles['product__stars-reviews']} href={'/'}>3 отзыва</Link>
          </div>}
        </div>
        <div>
          <span className={styles.product__name}>
            {name}
          </span>
          <h2 className={styles.product__price}>{price} ₽ <b>/шт.</b></h2>
        </div>
        <div className={styles.product__col}>
            {isCart ? 
              <button className={styles['product__btn--cart']}>
                В корзине
              </button>
            : 
            <>
              <button onClick={() => setIsCart(!isCart)} className={styles.product__btn}>
                В корзину
              </button>
              <div>
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.3" width="10" height="2" fill="#2E2E33"/>
                </svg>
                <span className={styles.product__count}>1</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.3">
                  <rect y="4" width="10" height="2" fill="#2E2E33"/>
                  <rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#2E2E33"/>
                  </g>
                </svg>
              </div>
            </>}

            {!isActive ? <svg onClick={onAddToFavourite} className={styles.product__favourite} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="#F5F5F7"/>
              <path d="M20 18C20 15.7909 18.2091 14 16 14C13.7909 14 12 15.7909 12 18C12 22 18 26 20 28" stroke="#999999" strokeLinecap="round"/>
              <path d="M20.2769 24C21.3119 23.1153 22.4675 22.0969 23.4677 21" stroke="#999999"/>
              <path d="M19.6464 27.6464C19.4512 27.8417 19.4512 28.1583 19.6464 28.3536C19.8417 28.5488 20.1583 28.5488 20.3536 28.3536L19.6464 27.6464ZM27.5 18C27.5 18.8754 27.1709 19.7841 26.6049 20.7075C26.0399 21.6293 25.2575 22.5354 24.3964 23.3964C23.5366 24.2563 22.6122 25.0578 21.7695 25.7756C20.9371 26.4847 20.1648 27.1281 19.6464 27.6464L20.3536 28.3536C20.8352 27.8719 21.5629 27.2653 22.418 26.5369C23.2628 25.8172 24.2134 24.9937 25.1036 24.1036C25.9925 23.2146 26.8351 22.2457 27.4576 21.23C28.0791 20.2159 28.5 19.1246 28.5 18H27.5ZM24 14.5C25.933 14.5 27.5 16.067 27.5 18H28.5C28.5 15.5147 26.4853 13.5 24 13.5V14.5ZM21.685 15.3749C22.3023 14.83 23.112 14.5 24 14.5V13.5C22.8591 13.5 21.8163 13.9252 21.0233 14.6251L21.685 15.3749Z" fill="#999999"/>
            </svg> : 
            <svg width="40" className={styles.product__favourite} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="#FF0000"/>
              <path d="M20 18C20 15.7909 18.2091 14 16 14C13.7909 14 12 15.7909 12 18C12 22 18 26 20 28" stroke="#FF0000" strokeLinecap="round"/>
              <path d="M20.2769 24C21.3119 23.1153 22.4675 22.0969 23.4677 21" stroke="#FF0000"/>
              <path d="M19.6464 27.6464C19.4512 27.8417 19.4512 28.1583 19.6464 28.3536C19.8417 28.5488 20.1583 28.5488 20.3536 28.3536L19.6464 27.6464ZM27.5 18C27.5 18.8754 27.1709 19.7841 26.6049 20.7075C26.0399 21.6293 25.2575 22.5354 24.3964 23.3964C23.5366 24.2563 22.6122 25.0578 21.7695 25.7756C20.9371 26.4847 20.1648 27.1281 19.6464 27.6464L20.3536 28.3536C20.8352 27.8719 21.5629 27.2653 22.418 26.5369C23.2628 25.8172 24.2134 24.9937 25.1036 24.1036C25.9925 23.2146 26.8351 22.2457 27.4576 21.23C28.0791 20.2159 28.5 19.1246 28.5 18H27.5ZM24 14.5C25.933 14.5 27.5 16.067 27.5 18H28.5C28.5 15.5147 26.4853 13.5 24 13.5V14.5ZM21.685 15.3749C22.3023 14.83 23.112 14.5 24 14.5V13.5C22.8591 13.5 21.8163 13.9252 21.0233 14.6251L21.685 15.3749Z" fill="#FF0000"/>
            </svg>
            }
        </div>
      </div>
    </div>
  )
}
