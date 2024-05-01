import { ConnectedPropsType } from "./ProfileContainer"
import no_avatar from '../../assets/avatar_images/no_avatar.png'
import style from './ProfileDescription.module.css'

interface PropsType extends ConnectedPropsType {
}

export const ProfileDescription = (props: PropsType) => {
    return (
        <div className={style.descriptionWrapper}>
            <div className={style.profileInformation}>
                {props.userProfile.photos ?
                    <img className={style.avatar}
                        src={props.userProfile.photos.small && props.userProfile.photos.large}
                        alt="" />
                    : <img className={style.avatar} src={no_avatar} alt="" />
                }
                <span>{props.userProfile.userId}</span>
                <span>{props.userProfile.aboutMe}</span>
                <span>{props.userProfile.fullName}</span>
            </div>
            <div className={style.jobsDescription}>
                <span>lookingForAJob:{props.userProfile.lookingForAJob}</span>
                <span>lookingForAJobDescription:{props.userProfile.lookingForAJobDescription}</span>
            </div>
            {
                props.userProfile.contacts ?
                    <div className={style.contactsInformation}>
                        <h3>Contacts:</h3>
                        <span className={style.socialLink}>facebook: <p className={style.text}>{props.userProfile.contacts.facebook}</p></span>
                        <span className={style.socialLink}>website: <p className={style.text}>{props.userProfile.contacts.website}</p></span>
                        <span className={style.socialLink}>vk: <p className={style.text}>{props.userProfile.contacts.vk}</p></span>
                        <span className={style.socialLink}>twitter: <p className={style.text}>{props.userProfile.contacts.twitter}</p></span>
                        <span className={style.socialLink}>instagram: <p className={style.text}>{props.userProfile.contacts.instagram}</p></span>
                        <span className={style.socialLink}>youtube: <p className={style.text}>{props.userProfile.contacts.youtube}</p></span>
                        <span className={style.socialLink}>github: <p className={style.text}>{props.userProfile.contacts.github}</p></span>
                        <span className={style.socialLink}>mainLink: <p className={style.text}>{props.userProfile.contacts.mainLink}</p></span>
                    </div>
                    : <div>is empty</div>
            }
        </div>
    )
}
