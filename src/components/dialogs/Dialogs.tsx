import { ChangeEvent } from "react";
import style from "./Dialog.module.css";
import { ConnectedPropsType } from "./DialogContainer";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";

interface PropsType extends ConnectedPropsType { }

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
                <textarea placeholder="Enter your message" value={props.messageText} onChange={onChangeHandler} />
                <button onClick={sendMessageHandler}>send message</button>
            </div>
        </>
    );
};
