import { ConnectedPropsType } from "./ProfileContainer";
import { ProfileDescription } from "./ProfileDescription";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

interface PropsType extends ConnectedPropsType { }

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileDescription {...props} />
            <PostsContainerComponent posts={props.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                postText={props.postText} />
        </div>
    );
};
