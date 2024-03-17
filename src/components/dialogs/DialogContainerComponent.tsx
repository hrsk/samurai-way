import { useDispatch } from "react-redux";
import { DialogType, MessageType } from "../../store/store";
import { changeMessageTextActionCreator, sendMessageActionCreator } from "../reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    changeMessageText: (value: string) => void
    sendMessage: () => void
    // dispatch: (action: any) => any
}

export const DialogsContainerComponent = (props: PropsType) => {

    const changeMessageText = (value: string) => {
        props.changeMessageText(value)
    }
    const sendMessage = () => {
        props.sendMessage()
    }

    return <Dialogs dialogs={props.dialogs}
        messages={props.messages}
        messageText={props.messageText}
        sendMessage={sendMessage}
        changeMessageText={changeMessageText} />
};
