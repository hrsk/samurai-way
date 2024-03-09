import { ActionsType, AppStateType, DialogType, MessageType, changeMessageTextActionCreator, sendMessageActionCreator } from "../../store/store";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import style from "./Dialog.module.css"
import { ChangeEvent } from "react";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    dispatch: (action: ActionsType) => AppStateType
}

export const Dialogs = (props: PropsType) => {

    const gialogs = props.dialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = props.messages.map(item => <Message key={item.id} message={item.message} />)


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageTextActionCreator(e.currentTarget.value))
    }
    const sendMessageHandler = () => {
        props.dispatch(sendMessageActionCreator())
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
