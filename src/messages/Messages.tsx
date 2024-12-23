import React from 'react'
import { DialogueWithUser } from './dialogs/DialogueWithUser'
import { Message } from './dialogs/message/Message'
import styles from './Messages.module.css'
import { MessagesPropsType } from './MessagesContainer'

export const Messages = (props: MessagesPropsType) => {
	const refElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

	const sendMessage = () => {
		props.sendMessage()
	}

	const onChangeMessageHandler = () => {
		const messageText = refElement.current?.value

		if (messageText) {
			props.changeMessageText(messageText)
		}
	}

	return (
		<div className={styles.messagesWrapper}>
			<ul>
				{props.dialogs.map(dialog => (
					<DialogueWithUser key={dialog.id} userName={dialog.userName} />
				))}
			</ul>
			<div>
				<ul>
					{props.messages.map(message => (
						<Message key={message.id} messageText={message.messageText} />
					))}
				</ul>
				<div>
					<textarea
						value={props.newMessageText}
						ref={refElement}
						onChange={onChangeMessageHandler}
					/>
					<button onClick={sendMessage}>send</button>
				</div>
			</div>
		</div>
	)
}
