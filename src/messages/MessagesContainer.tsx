import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import {
	changeMessageTextAC,
	DialogType,
	MessageType,
	sendMessageAC,
} from '../redux/dialogs-reducer'
import { AppStateType } from '../store/redux-store'
import { Messages } from './Messages'

type MapStateToPropsType = {
	dialogs: DialogType[]
	messages: MessageType[]
	newMessageText: string
}

type MapDispatchToPropsType = {
	sendMessage: () => void
	changeMessageText: (value: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
		newMessageText: state.messagesPage.newMessageText,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		sendMessage: () => {
			dispatch(sendMessageAC())
		},
		changeMessageText: (value: string) => {
			dispatch(changeMessageTextAC(value))
		},
	}
}

export type MessagesPropsType = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, mapDispatchToProps)
export const MessagesContainer = connector(Messages)
