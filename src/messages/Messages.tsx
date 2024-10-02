import { DialogueWithUser } from './dialogs/DialogueWithUser'
import { Message } from './dialogs/message/Message'

export const Messages = () => {
	return (
		<div>
			<ul>
				<DialogueWithUser />
			</ul>
			<div>
				<ul>
					<Message />
				</ul>
				<div>
					<textarea />
					<button>send</button>
				</div>
			</div>
		</div>
	)
}
