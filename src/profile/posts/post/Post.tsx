import profileImage from './../../../assets/images/avatars/rocket_ship_icon.png'
import styles from './Post.module.css'
type PropsType = {
	userName: string
	postText: string
}
export const Post = (props: PropsType) => {
	return (
		<li>
			<p>
				<img className={styles.avatarImage} src={profileImage} alt='' />
				{props.userName}
			</p>
			<p>{props.postText}</p>
		</li>
	)
}
