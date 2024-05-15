import { Route, Switch } from 'react-router-dom';
// import { DialogsContainer } from '../dialogs/DialogContainer';
// import { LoginContainer } from '../login/LoginContainer';
// import { ProfileContainer } from '../profile/ProfileContainer';
// import { UsersContainer } from '../users/UsersContainer';
import style from "./Content.module.css";
// import { FollowingsContainer } from '../following/FollowingContainer';
// import { PageNotFound } from '../page404/PageNotFound';
import { PATH } from '../../enum/paths';
import { lazy } from 'react';
import { withSuspense } from '../../features/hoc/withSuspense';

//@ts-ignore
const DialogsContainer = lazy(() => import('./../dialogs/DialogContainer')
    .then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);
const UsersContainer = lazy(() => import('./../users/UsersContainer')
    .then(({ UsersContainer }) => ({ default: UsersContainer })),
);
const ProfileContainer = lazy(() => import('./../profile/ProfileContainer')
    .then(({ ProfileContainer }) => ({ default: ProfileContainer })),
);
const LoginContainer = lazy(() => import('./../login/LoginContainer')
    .then(({ LoginContainer }) => ({ default: LoginContainer })),
);
const FollowingsContainer = lazy(() => import('./../following/FollowingContainer')
    .then(({ FollowingsContainer }) => ({ default: FollowingsContainer })),
);
const PageNotFound = lazy(() => import('./../page404/PageNotFound')
    .then(({ PageNotFound }) => ({ default: PageNotFound })),
);


const SuspendedDialogsPage = withSuspense(DialogsContainer);
const SuspendedUsersPage = withSuspense(UsersContainer);
const SuspendedProfilePage = withSuspense(ProfileContainer);
const SuspendedLoginPage = withSuspense(LoginContainer);
const SuspendedFollowingsPage = withSuspense(FollowingsContainer);
const SuspendedPageNotFound = withSuspense(PageNotFound);

export const Content = () => {
    return (
        <div className={style.contentWrapper}>
            <Switch>
                <Route exact path={`${PATH.PROFILE}/:${PATH.USER_ID}?`} component={() => <SuspendedProfilePage />} />
                <Route exact path={PATH.MESSAGES} component={() => <SuspendedDialogsPage />} />
                <Route exact path={PATH.USERS} component={() => <SuspendedUsersPage />} />
                <Route exact path={PATH.LOGIN} component={() => <SuspendedLoginPage />} />
                <Route exact path={PATH.FOLLOWINGS} component={() => <SuspendedFollowingsPage />} />
                <Route exact path={PATH.PAGE_NOT_FOUND} component={() => <SuspendedPageNotFound />} />
                {/* <Route exact path={`${PATH.PROFILE}/:${PATH.USER_ID}?`} component={() => <ProfileContainer />} />
                <Route exact path={PATH.MESSAGES} component={() => <DialogsContainer />} />
                <Route exact path={PATH.USERS} component={() => <UsersContainer />} />
                <Route exact path={PATH.LOGIN} component={() => <LoginContainer />} />
                <Route exact path={PATH.FOLLOWINGS} component={() => <FollowingsContainer />} />
                <Route exact path={PATH.PAGE_NOT_FOUND} component={() => <PageNotFound />} /> */}
            </Switch>
        </div>
    );
}
