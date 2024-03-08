import { PostType } from "../../store/store";
import bg from "./../../assets/background/profile_bg_image.jpg";
import { Posts } from "./posts/Posts";

type PropsType = {
    posts: PostType[]
    addPost: () => void
    changePostText: (value: string) => void
    newPostText: string
    dispatch: (action: any) => void
}

export const Profile = (props: PropsType) => {
    return (
        <>
            PROFILE
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <Posts posts={props.posts}
                newPostText={props.newPostText}
                addPost={props.addPost}
                changePostText={props.changePostText}
                dispatch={props.dispatch} />
        </>
    );
};
