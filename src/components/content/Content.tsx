import { Route } from 'react-router-dom';
import { ActionsType, AppStateType, MessagesPageType, ProfilePageType } from '../../store/store';
import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';
import style from "./Content.module.css";

type PropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    dispatch: (action: ActionsType) => AppStateType
}

export const Content = (props: PropsType) => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile'} component={() => <Profile posts={props.profilePage.posts}
                postText={props.profilePage.postText}
                dispatch={props.dispatch} />}
            />
            <Route exact path={'/messages'} component={() => <Dialogs dialogs={props.messagesPage.dialogs}
                messages={props.messagesPage.messages}
                messageText={props.messagesPage.messageText}
                dispatch={props.dispatch} />} />
        </div>
    );
}
