import { DialogType, MessageType } from "../../store/store";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import style from "./Dialog.module.css"
import { ChangeEvent } from "react";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    sendMessage: () => void
    changeMessageText: (value: string) => void
    newMessageText: string
}

export const Dialogs = (props: PropsType) => {

    const gialogs = props.dialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = props.messages.map(item => <Message key={item.id} message={item.message} />)


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageText(e.currentTarget.value)

    }
    const sendMessageHandler = () => {
        props.sendMessage()
        props.changeMessageText('')
    }

    return (
        <>
            <div className={style.wrapper}>
                <ul className={style.ul}>
                    {gialogs}
                </ul>
                <ul className={style.ul}>
                    {messages}
                </ul>
            </div>
            <div className={style.textarea}>
                <textarea placeholder="Enter your message" value={props.newMessageText} onChange={onChangeHandler} />
                <button onClick={sendMessageHandler}>send message</button>
            </div>
        </>
    );
};
