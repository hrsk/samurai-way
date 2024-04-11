import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { ProfileStatus } from "./ProfileStatus";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

interface PropsType extends ConnectedPropsType {
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileStatus {...props} />
            <ProfileDescription {...props} />
            <PostsContainerComponent posts={props.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                postText={props.postText} />
        </div>
    );
};
