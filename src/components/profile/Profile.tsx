import classes from './Profile.module.css';
import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileDescription {...props} />
            <PostsContainerComponent posts={props.posts}
                photos={props.userProfile.photos}
                addPost={props.addPost}
            />
        </div>
    );
};
