import { ConnectedPropsType } from "./ProfileContainer"
import no_avatar from '../../assets/avatar_images/no_avatar.png'
import classes from './ProfileDescription.module.css'
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks"
import { Button } from "../common/button/Button"
import { ChangeEvent } from "react"
import { ProfileContactsData } from "./ContactsDataForm"

interface PropsType extends ConnectedPropsType {
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
    uploadUserPhoto: (image: File) => void
    isOwner: boolean
}

export const ProfileDescription = (props: PropsType) => {

    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            props.uploadUserPhoto(event.target.files[0])
        }
    }

    return (
        <div className={classes.descriptionWrapper}>
            <div className={classes.statusBlock} >
                {props.userProfile.photos ?
                    <img className={classes.avatar}
                        src={props.userProfile.photos.small && props.userProfile.photos.large}
                        alt="" />
                    : <img className={classes.avatar} src={no_avatar} alt="" />
                }
                <ProfileStatusWithHooks status={props.status}
                    changeUserStatusHandler={props.changeUserStatusHandler}
                    setUserStatusHandler={props.setUserStatusHandler} />
                {/* <Button onClick={() => { }}>Edit</Button> */}
                {props.isOwner && <input type="file" onChange={onPhotoSelected} />}
                {/* <button className={style.button} onClick={() => { }}>Change avatar</button> */}
            </div>
            <div className={classes.profileInformationContainer}>
                <div className={classes.aboutMe}>
                    <p>{props.userProfile.aboutMe}</p>
                    <span>{props.userProfile.fullName}</span>
                    <p>lookingForAJob:{props.userProfile.lookingForAJob}</p>
                    <p>lookingForAJobDescription: {props.userProfile.lookingForAJobDescription}</p>
                </div>
                <ProfileContactsData userProfile={props.userProfile} />
                {/* {
                    props.userProfile.contacts &&
                    <div className={classes.contactsInformation}>
                        <span>Contacts:</span>
                        <span>facebook: <p className={classes.text}>{props.userProfile.contacts.facebook}</p></span>
                        <span>website: <p className={classes.text}>{props.userProfile.contacts.website}</p></span>
                        <span>vk: <p className={classes.text}>{props.userProfile.contacts.vk}</p></span>
                        <span>twitter: <p className={classes.text}>{props.userProfile.contacts.twitter}</p></span>
                        <span>instagram: <p className={classes.text}>{props.userProfile.contacts.instagram}</p></span>
                        <span>youtube: <p className={classes.text}>{props.userProfile.contacts.youtube}</p></span>
                        <span>github: <p className={classes.text}>{props.userProfile.contacts.github}</p></span>
                        <span>mainLink: <p className={classes.text}>{props.userProfile.contacts.mainLink}</p></span>
                        <Button onClick={() => { }}>Edit</Button>
                    </div>
                } */}
            </div>
        </div>
    )
}
