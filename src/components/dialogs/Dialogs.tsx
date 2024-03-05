import { DialogType, MessageType } from "../..";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";

type PropsType = {
    arrayDialogs: DialogType[]
    arrayMessages: MessageType[]
}

export const Dialogs = (props: PropsType) => {

    const gialogs = props.arrayDialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = props.arrayMessages.map(item => <Message key={item.id} message={item.message} />)

    return (
        <div style={{ display: 'flex', gap: '100px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {gialogs}
            </ul>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {messages}
            </ul>
        </div>
    );
};
