import Schedule from './Schedule/Component'
import styles from './styles.module.scss'

function Base() {
  return (
    <div className={styles.container}>
      <Schedule />
    </div>
  )
}

export default Base