import { NavLink } from 'react-router-dom'
import styles from './DialogueWithUser.module.css'

type PropsType = {
	userName: string
}
export const DialogueWithUser = (props: PropsType) => {
	return (
		<li>
			<NavLink className={styles.link} to={`messages/dialog/${props.userName}`}>
				{props.userName}
			</NavLink>
		</li>
	)
}
