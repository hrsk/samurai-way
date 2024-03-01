import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';


export const Content = () => {
    return (
        <div className='app-wrapper-content'>
            CONTENT
            <Profile />
            <Dialogs />
        </div>
    );
}
