import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";
import style from './Profile.module.css'

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={style.profileWrapper}>
            <ProfileDescription {...props} />
            {/* <ProfileStatus {...props} /> */}
            <PostsContainerComponent posts={props.posts}
                photos={props.userProfile.photos}
                // changePostText={props.changePostText}
                addPost={props.addPost}
            // postText={props.postText} 
            />
        </div>
    );
};
