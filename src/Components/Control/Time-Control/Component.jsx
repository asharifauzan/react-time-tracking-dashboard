import cx from 'classnames'
import styles from '../styles.module.scss'

function TimeControl(props) {

  const setActiveMode = mode=> {
    return cx(styles.time_label, props.timemode === mode ? styles.active : null)
  }

  return (
    <div className={styles.time_wrapper}>
      <div className={styles.time_control}>
        <span
          className={setActiveMode('day')} 
          onClick={()=> props.switchTimemode('day')}>
            Daily
        </span>
        <span
          className={setActiveMode('week')} 
          onClick={()=> props.switchTimemode('week')}>
            Weekly
        </span>
        <span
          className={setActiveMode('month')} 
          onClick={()=> props.switchTimemode('month')}>
            Monthly
        </span>
      </div>
    </div>
  )
}

export default TimeControl