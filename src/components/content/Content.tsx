import { Route, Switch } from 'react-router-dom';
import { DialogsContainer } from '../dialogs/DialogContainer';
import { LoginContainer } from '../login/LoginContainer';
import { ProfileContainer } from '../profile/ProfileContainer';
import { UsersContainer } from '../users/UsersContainer';
import style from "./Content.module.css";
import { FollowingsContainer } from '../following/FollowingContainer';
import { PageNotFound } from '../page404/PageNotFound';
import { PATH } from '../../enum/paths';

export const Content = () => {
    return (
        <div className={style.contentWrapper}>
            <Switch>
                <Route exact path={`${PATH.PROFILE}/:${PATH.USER_ID}?`} component={() => <ProfileContainer />} />
                <Route exact path={PATH.MESSAGES} component={() => <DialogsContainer />} />
                <Route exact path={PATH.USERS} component={() => <UsersContainer />} />
                <Route exact path={PATH.LOGIN} component={() => <LoginContainer />} />
                <Route exact path={PATH.FOLLOWINGS} component={() => <FollowingsContainer />} />
                <Route exact path={PATH.PAGE_NOT_FOUND} component={() => <PageNotFound />} />
            </Switch>
        </div>
    );
}
