import { DialogType, MessageType } from "../../state/state";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = (props: PropsType) => {

    const gialogs = props.dialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = props.messages.map(item => <Message key={item.id} message={item.message} />)

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
