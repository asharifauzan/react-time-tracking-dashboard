import { useState } from 'react'
import Schedule from '../Schedule/Component'
import Control from '../Control/Component'
import styles from './styles.module.scss'

function Base() {
  // set daily as default mode
  const [ timemode, setTimemode ] = useState('day')

  const switchTimemode = mode=> {
    setTimemode(mode)
  }

  return (
    <div className={styles.container}>
      <Control timemode={timemode} switchTimemode={switchTimemode} />
      <Schedule timemode={timemode} />
    </div>
  )
}

export default Base