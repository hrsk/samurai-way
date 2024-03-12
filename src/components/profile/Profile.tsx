import { PostType } from "../../store/store";
import bg from "./../../assets/background/profile_bg_image.jpg";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";

type PropsType = {
    posts: PostType[]
    postText: string
    dispatch: (action: any) => any
}

export const Profile = (props: PropsType) => {
    return (
        <>
            PROFILE
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <PostsContainerComponent posts={props.posts}
                postText={props.postText}
                dispatch={props.dispatch} />
        </>
    );
};
