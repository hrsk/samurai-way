import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";

export type DialogType = {
    id: number
    userName: string
}
export type MessageType = {
    id: number
    message: string
}

export const Dialogs = () => {

    const arrayDialogs: DialogType[] = [
        { id: 1, userName: 'Dimych' },
        { id: 2, userName: 'Maria' },
        { id: 3, userName: 'Katya' },
        { id: 4, userName: 'Igor' },
        { id: 5, userName: 'Viktor' },
    ]

    const arrayMessages: MessageType[] = [
        { id: 1, message: 'Lorem ipsum' },
        { id: 2, message: 'Lorem ipsum' },
        { id: 3, message: 'Lorem ipsum' },
        { id: 4, message: 'Lorem ipsum' },
        { id: 5, message: 'Lorem ipsum' },
    ]

    const gialogs = arrayDialogs.map(item => <Dialog key={item.id} userName={item.userName} />)
    const messages = arrayMessages.map(item => <Message key={item.id} message={item.message} />)

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
