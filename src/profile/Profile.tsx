// import { MyContext } from '..'
// import { PostsContainer } from './posts/PostsContainer'

import {PostsContainer} from './posts/PostsContainer'
import no_avatar from "../assets/images/avatars/no_avatar.png";
import {ProfilePropsType} from "./ProfileContainer";

type PropsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: any) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div>
                {props.profile.photos ?
                    <img src={
                        props.profile.photos.small !== null
                            ? props.profile.photos.small
                            : no_avatar && props.profile.photos.large !== null
                                ? props.profile.photos.large
                                : no_avatar
                    }
                         alt='alt'/>
                    :
                    <img src={no_avatar} alt=""/>
                }
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.userId}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                {props.profile.contacts &&
                    <div>
                        <h3>Contacts:</h3>
                        <p>{props.profile.contacts.facebook}</p>
                        <p>{props.profile.contacts.github}</p>
                        <p>{props.profile.contacts.instagram}</p>
                        <p>{props.profile.contacts.mainLink}</p>
                        <p>{props.profile.contacts.twitter}</p>
                        <p>{props.profile.contacts.vk}</p>
                        <p>{props.profile.contacts.website}</p>
                        <p>{props.profile.contacts.youtube}</p>
                    </div>
                }
            </div>
            {/*<div>*/}
            {/*	<div>image wallpaper</div>*/}
            {/*	<div>*/}
            {/*		<img src='' alt='avatar' />*/}
            {/*	</div>*/}
            {/*	<div>date of birth</div>*/}
            {/*	<div>city</div>*/}
            {/*	<div>education</div>*/}
            {/*	<div>website</div>*/}
            {/*</div>*/}
            {/* <MyContext.Consumer> */}
            {/* {value => ( */}
            <PostsContainer/>
            {/* <PostsContainer
				posts={value.getState().profilePage.posts}
				dispatch={value.dispatch}
				newPostText={value.getState().profilePage.newPostText}
			/> */}
            {/* )} */}
            {/* </MyContext.Consumer> */}
        </div>
    )
}
