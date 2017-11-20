import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'ECE Tutoring'}</p>
      <p className={slogan}>{'Located in EBU1 on the 5th floor'}</p>
    </div>
  )
}
