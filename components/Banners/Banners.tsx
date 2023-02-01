import React, {FC} from 'react'

import Image from 'next/image';

import styles from './Banners.module.scss';

import Banner1 from '../../assets/images/banner-1.png'
import Banner2 from '../../assets/images/banner-2.png'

export const Banners:FC = () => {
  return (
    <div className={styles.banners}>
      <h2 className={styles.banners__title}>Всё для комфортной работы</h2>
      <svg className={styles.banners__arrow} width="43" height="18" viewBox="0 0 43 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
        <path d="M33 1L41 9L33 17" stroke="#2E2E33" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 9H41" stroke="#2E2E33" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
      <div>
        <Image width={332} height={140} src={Banner1} alt="Banner-1"/>
      </div>
      <div>
        <Image width={332} height={140} src={Banner2} alt="Banner-2"/>
      </div>
    </div>
  )
}
