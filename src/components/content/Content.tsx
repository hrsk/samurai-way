import { Route } from 'react-router-dom';
import { MessagesPageType, ProfilePageType } from '../../store/store';
import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';
import style from "./Content.module.css"

type PropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    addPost: () => void
    changePostText: (value: string) => void
    newPostText: string
    sendMessage: () => void
    changeMessageText: (value: string) => void
    newMessageText: string
}

export const Content = (props: PropsType) => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile'} component={() => <Profile posts={props.profilePage.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                newPostText={props.newPostText} />}
            />
            <Route exact path={'/messages'} component={() => <Dialogs dialogs={props.messagesPage.dialogs}
                messages={props.messagesPage.messages}
                changeMessageText={props.changeMessageText}
                sendMessage={props.sendMessage}
                newMessageText={props.newMessageText} />} />
        </div>
    );
}
