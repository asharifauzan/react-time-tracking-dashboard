import { useState } from 'react'
import cx from 'classnames'
import styles from '../styles.module.scss'

function TimeControl() {
  // set daily as default mode
  const [ timemode, setTimemode ] = useState('day')

  const switchMode = mode=> {
    setTimemode(mode)
  }

  const setActiveMode = mode=> {
    return cx(styles.time_label, timemode === mode ? styles.active : null)
  }

  return (
    <div className={styles.time_wrapper}>
      <div className={styles.time_control}>
        <span
          className={setActiveMode('day')} 
          onClick={()=> switchMode('day')}>
            Daily
        </span>
        <span
          className={setActiveMode('week')} 
          onClick={()=> switchMode('week')}>
            Weekly
        </span>
        <span
          className={setActiveMode('month')} 
          onClick={()=> switchMode('month')}>
            Monthly
        </span>
      </div>
    </div>
  )
}

export default TimeControl