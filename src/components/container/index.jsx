import React from 'react'
import style from './container.module.scss'

export default function Container(props) {
  return (
    <div className={style.container}>
        {props.children}
    </div>
  )
}
