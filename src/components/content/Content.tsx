import { Route } from 'react-router-dom';
import { MessagesPageType, ProfilePageType } from '../../state/state';
import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';
import style from "./Content.module.css"

type PropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    addPost: (value: string) => void
}

export const Content = (props: PropsType) => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile'} component={() => <Profile posts={props.profilePage.posts} addPost={props.addPost} />} />
            <Route exact path={'/messages'} component={() => <Dialogs dialogs={props.messagesPage.dialogs}
                messages={props.messagesPage.messages} />} />
        </div>
    );
}
