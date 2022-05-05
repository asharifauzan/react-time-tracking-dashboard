import Schedule from './Schedule/Component'
import Control from './Control/Component'
import styles from './styles.module.scss'

function Base() {
  return (
    <div className={styles.container}>
      <Control />
      <Schedule />
    </div>
  )
}

export default Base