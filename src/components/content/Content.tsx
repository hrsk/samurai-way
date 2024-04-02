import { Route } from 'react-router-dom';
import { DialogsContainerComponent } from '../dialogs/DialogContainerComponent';
import { Profile } from '../profile/Profile';
import style from "./Content.module.css";
import { ConnectedProps } from './ContentContainer';
import { UsersContainer } from '../users/UsersContainer';
import { ProfileContainer } from '../profile/ProfileContainer';

interface PropsType extends ConnectedProps {
}

export const Content = (props: PropsType) => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile'} component={() => <ProfileContainer />} />
            {/* <Route exact path={'/profile'} component={() => <Profile posts={props.profilePage.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                postText={props.profilePage.postText} />}
            /> */}
            <Route exact path={'/messages'} component={() => <DialogsContainerComponent dialogs={props.messagesPage.dialogs}
                messages={props.messagesPage.messages}
                changeMessageText={props.changeMessageText}
                sendMessage={props.sendMessage}
                messageText={props.messagesPage.messageText} />} />
            <Route exact path={'/users'} component={() => <UsersContainer />} />
        </div>
    );
}
