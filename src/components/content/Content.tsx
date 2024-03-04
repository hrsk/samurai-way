import { Route } from 'react-router-dom';
import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';


export const Content = () => {
    return (
        <div className='app-wrapper-content'>
            <Route exact path={'/profile'} component={() => <Profile />} />
            <Route exact path={'/dialogs'} component={() => <Dialogs />} />
        </div>
    );
}
