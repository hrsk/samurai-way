import { ChangeEvent } from "react";
import classes from "./Dialog.module.css";
import { ConnectedPropsType } from "./DialogContainer";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { Button } from "../common/button/Button";

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
        <div className={classes.dialogsWrapper}>
            <ul className={classes.ul}>
                {gialogs}
            </ul>
            <ul className={classes.ul}>
                {messages}
            </ul>
            <div className={classes.textareaContainer}>
                <textarea className={classes.textarea}
                    placeholder="Enter your message"
                    value={props.messageText}
                    onChange={onChangeHandler} />
                <Button onClick={sendMessageHandler}>send message</Button>
            </div>
        </div>
    );
};
