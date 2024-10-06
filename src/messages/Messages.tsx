import { DialogType } from '../state/state'
import { DialogueWithUser } from './dialogs/DialogueWithUser'
import { Message } from './dialogs/message/Message'
import styles from './Messages.module.css'

type PropsType = {
	dialogs: DialogType[]
}

export const Messages = (props: PropsType) => {
	return (
		<div className={styles.messagesWrapper}>
			<ul>
				{props.dialogs.map(dialog => (
					<DialogueWithUser key={dialog.id} userName={dialog.userName} />
				))}
				{/* <DialogueWithUser />
				<DialogueWithUser />
				<DialogueWithUser />
				<DialogueWithUser />
				<DialogueWithUser /> */}
			</ul>
			<div>
				<ul>
					{props.dialogs.map(message => (
						<Message key={message.id} messageText={message.messageText} />
					))}
					{/* <Message />
					<Message />
					<Message />
					<Message />
					<Message /> */}
				</ul>
				<div>
					<textarea />
					<button>send</button>
				</div>
			</div>
		</div>
	)
}
