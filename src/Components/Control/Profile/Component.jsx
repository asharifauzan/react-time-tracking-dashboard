import ProfilePic from '../../../Assets/image-jeremy.png'
import styles from '../styles.module.scss'

function Profile({name}) {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.avatar}>
        <img src={ProfilePic} alt={name} />
      </div>
      <p>Report for</p>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Profile