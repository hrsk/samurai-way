import { DialogType, MessageType } from "../../store/store";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import style from "./Dialog.module.css"

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = (props: PropsType) => {

    const gialogs = props.dialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = props.messages.map(item => <Message key={item.id} message={item.message} />)

    return (
        <div className={style.wrapper}>
            <ul className={style.ul}>
                {gialogs}
            </ul>
            <ul className={style.ul}>
                {messages}
            </ul>
        </div>
    );
};
