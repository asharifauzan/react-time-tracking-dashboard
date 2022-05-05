import Profile from './Profile/Component'
import TimeControl from './Time-Control/Component'
import styles from './styles.module.scss'

function Control(props) {
  return (
    <div className={styles.control_wrapper}>
      <Profile name="Jeremy Robson" />
      <TimeControl {...props} />
    </div>
  )
}

export default Control