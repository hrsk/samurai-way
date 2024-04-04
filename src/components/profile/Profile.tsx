import bg from "./../../assets/background/profile_bg_image.jpg";
import { ConnectedPropsType } from "./ProfileContainer";
import { PostsContainerComponent } from "./posts/PostsContainerComponent";
import no_avatar from '../../assets/avatar_images/no_avatar.png'

interface PropsType extends ConnectedPropsType { }

export const Profile = (props: PropsType) => {
    return (
        <>
            <div>
                <div>
                    {/* <img src={props.userProfile.photos.small ? props.userProfile.photos.large : no_avatar} /> */}
                    <h3>{props.userProfile.fullName}</h3>
                </div>
                <div>
                    <h3>Contacts</h3>
                    {/* <span>{props.userProfile.contacts.github}</span> */}
                </div>
                <div>
                    <span>{props.userProfile.lookingForAJob}</span>
                    <span>{props.userProfile.lookingForAJobDescription}</span>
                </div>
            </div>
            <img style={{ width: "100%" }} src={bg} alt='background' />
            <PostsContainerComponent posts={props.posts}
                changePostText={props.changePostText}
                addPost={props.addPost}
                postText={props.postText} />
        </>
    );
};
