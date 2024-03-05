import { Posts } from "./posts/Posts";
import bg from "./../../assets/background/profile_bg_image.jpg"
import { PostType } from "../..";

type PropsType = {
    arrayPosts: PostType[]
}

export const Profile = (props: PropsType) => {
    return (
        <>
            PROFILE
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <Posts arrayPosts={props.arrayPosts} />
        </>
    );
};
