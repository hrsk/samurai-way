import { PostType } from "../../types";
import bg from "./../../assets/background/profile_bg_image.jpg";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

type PropsType = {
    posts: PostType[]
    postText: string
    changePostText: (value: string) => void
    addPost: () => void
}

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
