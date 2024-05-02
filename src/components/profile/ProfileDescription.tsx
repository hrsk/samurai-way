import { ConnectedPropsType } from "./ProfileContainer"
import no_avatar from '../../assets/avatar_images/no_avatar.png'
import style from './ProfileDescription.module.css'
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks"

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}

export const ProfileDescription = (props: PropsType) => {
    return (
        <div className={style.descriptionWrapper}>
            <div className={style.profileInformation}>
                <div className={style.statusBlock} >
                    {props.userProfile.photos ?
                        <img className={style.avatar}
                            src={props.userProfile.photos.small && props.userProfile.photos.large}
                            alt="" />
                        : <img className={style.avatar} src={no_avatar} alt="" />
                    }
                    <ProfileStatusWithHooks status={props.status}
                        changeUserStatusHandler={props.changeUserStatusHandler}
                        setUserStatusHandler={props.setUserStatusHandler} />
                    <button className={style.button} onClick={() => { }}>Change avatar</button>
                </div>
                <div className={style.aboutMe}>
                    {/* <span>{props.userProfile.userId}</span> */}
                    <p>{props.userProfile.aboutMe}</p>
                    <span>{props.userProfile.fullName}</span>
                    <p>lookingForAJob:{props.userProfile.lookingForAJob}</p>
                    <p>lookingForAJobDescription: {props.userProfile.lookingForAJobDescription}</p>
                    {
                        props.userProfile.contacts &&
                        <div className={style.contactsInformation}>
                            <span>Contacts:</span>
                            <span>facebook: <p className={style.text}>{props.userProfile.contacts.facebook}</p></span>
                            <span>website: <p className={style.text}>{props.userProfile.contacts.website}</p></span>
                            <span>vk: <p className={style.text}>{props.userProfile.contacts.vk}</p></span>
                            <span>twitter: <p className={style.text}>{props.userProfile.contacts.twitter}</p></span>
                            <span>instagram: <p className={style.text}>{props.userProfile.contacts.instagram}</p></span>
                            <span>youtube: <p className={style.text}>{props.userProfile.contacts.youtube}</p></span>
                            <span>github: <p className={style.text}>{props.userProfile.contacts.github}</p></span>
                            <span>mainLink: <p className={style.text}>{props.userProfile.contacts.mainLink}</p></span>
                            <button className={style.button} onClick={() => { }}>Edit</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
