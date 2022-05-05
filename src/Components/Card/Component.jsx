import cx from 'classnames'
import styles from './styles.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={cx(styles.card_header, styles[props.title.toLowerCase().replace(" ", "_")])}>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_title}>
          {props.title} <i className={styles.icon_ellipsis}></i>
        </div>
        <h3>
          {props.activity.current}hrs
        </h3>
        <span className={styles.text_muted}>
          Last {props.timemode.charAt(0).toUpperCase() + props.timemode.slice(1)} - {props.activity.previous}
        </span>
      </div>
    </div>
  )
}

export default Card