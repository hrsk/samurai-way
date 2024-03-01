import { Posts } from "./posts/Posts";
import bg from "./../../assets/background/profile_bg_image.jpg"

export const Profile = () => {
    return (
        <>
            PROFILE
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <Posts />
        </>
    );
};
