import { Route } from 'react-router-dom';
import { DialogsContainer } from '../dialogs/DialogContainer';
import { LoginContainer } from '../login/LoginContainer';
import { ProfileContainer } from '../profile/ProfileContainer';
import { UsersContainer } from '../users/UsersContainer';
import style from "./Content.module.css";
import { FollowingsContainer } from '../following/FollowingContainer';
import { SignIn } from '../sign_in/SignIn';

export const Content = () => {
    return (
        <div className={style.contentWrapper}>
            <Route exact path={'/profile/:userId?'} component={() => <ProfileContainer />} />
            <Route exact path={'/messages'} component={() => <DialogsContainer />} />
            <Route exact path={'/users'} component={() => <UsersContainer />} />
            <Route exact path={'/login'} component={() => <LoginContainer />} />
            <Route exact path={'/followings'} component={() => <FollowingsContainer />} />
            <Route exact path={'/sign_in'} component={() => <SignIn />} />
        </div>
    );
}
