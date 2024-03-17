import { DialogType, MessageType } from "../../types";
import { Dialogs } from "./Dialogs";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    changeMessageText: (value: string) => void
    sendMessage: () => void
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
