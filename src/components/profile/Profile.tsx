import bg from "./../../assets/background/profile_bg_image.jpg";
import { ConnectedPropsType } from "./ProfileContainer";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

interface PropsType extends ConnectedPropsType { }

export const Profile = (props: PropsType) => {
    return (
        <>
            PROFILE
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <PostsContainerComponent posts={props.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                postText={props.postText} />
        </>
    );
};
