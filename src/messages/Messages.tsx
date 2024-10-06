import { DialogueWithUser } from './dialogs/DialogueWithUser'
import { Message } from './dialogs/message/Message'
import styles from './Messages.module.css'

export const Messages = () => {
	const dialogs = [
		{
			id: 1,
			userName: 'Dimych',
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 2,
			userName: 'Viktor',
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 3,
			userName: 'Valera',
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 4,
			userName: 'Sveta',
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 5,
			userName: 'Igor',
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
	]

	return (
		<div className={styles.messagesWrapper}>
			<ul>
				{dialogs.map(dialog => (
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
					{dialogs.map(message => (
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
