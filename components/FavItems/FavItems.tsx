import React, { FC } from 'react'

import { TypeItems } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import hit from '../../assets/images/hit.png';

import styles from './FavItems.module.scss'

export const FavItems:FC<TypeItems> = ({id, name, price, images, isHit}) => {
  return (
    <div className={styles.product__item}>
      {isHit && <Image className={styles.product__hit} width={64} height={24} src={hit} alt="hit"/>}
      <Image className={styles.product__images} width={220} height={220} src={images} alt="Monitor"/>
      <div>
        <div className={styles.product__stars}>
          <span className={styles.product__type}>electronics</span>
          {isHit && <div>
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
      </div>
    </div>
  )
}
