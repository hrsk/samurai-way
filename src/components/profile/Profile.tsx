import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileStatusWithHooks status={props.status} changeUserStatusHandler={props.changeUserStatusHandler} setUserStatusHandler={props.setUserStatusHandler} />
            {/* <ProfileStatus {...props} /> */}
            <ProfileDescription {...props} />
            <PostsContainerComponent posts={props.posts}
                // changePostText={props.changePostText}
                addPost={props.addPost}
            // postText={props.postText} 
            />
        </div>
    );
};
