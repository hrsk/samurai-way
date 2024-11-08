import {Route} from 'react-router-dom'
import {MessagesContainer} from '../messages/MessagesContainer'
import {UsersContainer} from '../users/UsersContainer'
import {ProfileContainer} from "../profile/ProfileContainer";
import {Login} from "../login/Login";

export const Content = () => {
    return (
        <div className={'content-wrapper'}>
            <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route exact path={'/messages'} render={() => <MessagesContainer/>}/>
            <Route exact path={'/users'} render={() => <UsersContainer/>}/>
            <Route exact path={'/login'} render={() => <Login/>}/>
        </div>
    )
}
