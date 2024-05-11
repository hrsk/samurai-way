import classes from './Profile.module.css';
import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { PostsContainer } from "./posts/PostsContainer";

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileDescription {...props} />
            <PostsContainer />
        </div>
    );
};
