import { useDispatch } from "react-redux";
import { DialogType, MessageType } from "../../store/store";
import { changeMessageTextActionCreator, sendMessageActionCreator } from "../reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    // dispatch: (action: any) => any
}

export const DialogsContainerComponent = (props: PropsType) => {

    const dispatch = useDispatch()

    const changeMessageText = (value: string) => {
        dispatch(changeMessageTextActionCreator(value))
    }
    const sendMessage = () => {
        dispatch(sendMessageActionCreator())
    }

    return <Dialogs dialogs={props.dialogs}
        messages={props.messages}
        messageText={props.messageText}
        sendMessage={sendMessage}
        changeMessageText={changeMessageText} />
};
