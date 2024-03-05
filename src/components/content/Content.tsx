import { Route } from 'react-router-dom';
import { Dialogs } from '../dialogs/Dialogs';
import { Profile } from '../profile/Profile';
import { DialogType, MessageType, PostType } from '../..';

type PropsType = {
    arrayDialogs: DialogType[]
    arrayMessages: MessageType[]
    arrayPosts: PostType[]
}

export const Content = (props: PropsType) => {
    return (
        <div className='app-wrapper-content'>
            <Route exact path={'/profile'} component={() => <Profile arrayPosts={props.arrayPosts} />} />
            <Route exact path={'/messages'} component={() => <Dialogs arrayDialogs={props.arrayDialogs} arrayMessages={props.arrayMessages} />} />
        </div>
    );
}
