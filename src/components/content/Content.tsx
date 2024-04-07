import { Route } from 'react-router-dom';
import { DialogsContainer } from '../dialogs/DialogContainer';
import { ProfileContainer } from '../profile/ProfileContainer';
import { UsersContainer } from '../users/UsersContainer';
import style from "./Content.module.css";

export const Content = () => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile/:userId?'} component={() => <ProfileContainer />} />
            <Route exact path={'/messages'} component={() => <DialogsContainer />} />
            <Route exact path={'/users'} component={() => <UsersContainer />} />
        </div>
    );
}
