import { ConnectedPropsType } from "./ProfileContainer"
import no_avatar from '../../assets/avatar_images/no_avatar.png'
import { ProfileStatus } from "./ProfileStatus"

interface PropsType extends ConnectedPropsType { }

export const ProfileDescription = (props: PropsType) => {
    return (
        <div>
            <ProfileStatus {...props} />
            <div>
                <p>{props.userProfile.userId}</p>
                <span style={{ display: 'block' }}>{props.userProfile.aboutMe}</span>
                <span style={{ display: 'block', fontWeight: 600 }}>{props.userProfile.fullName}</span>
                {props.userProfile.photos ?
                    <img style={{ width: '64px', height: '64px' }}
                        src={props.userProfile.photos.small && props.userProfile.photos.large}
                        alt="" />
                    : <img style={{ width: '64px', height: '64px' }} src={no_avatar} alt="" />
                }
            </div>
            <div>
                <span style={{ display: 'block' }}>
                    lookingForAJob:
                    <p style={{ display: 'inline-block' }}>{props.userProfile.lookingForAJob}</p>
                </span>
                <span style={{ display: 'block' }}>
                    lookingForAJobDescription:
                    <p style={{ display: 'inline-block' }}>{props.userProfile.lookingForAJobDescription}</p>
                </span>
            </div>
            {
                props.userProfile.contacts ?
                    <div>
                        <span style={{ display: 'block', fontSize: 24, fontWeight: 600 }}>Contacts:</span>
                        <span style={{ display: 'block' }}>
                            facebook:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.facebook}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            website:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.website}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            vk:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.vk}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            twitter:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.twitter}</p>
                        </span>

                        <span style={{ display: 'block' }}>
                            instagram:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.instagram}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            youtube:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.youtube}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            github:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.github}</p>
                        </span>
                        <span style={{ display: 'block' }}>
                            mainLink:
                            <p style={{ display: 'inline-block' }}>{props.userProfile.contacts.mainLink}</p>
                        </span>
                    </div>
                    : <div>is empty</div>
            }
        </div>
    )
}
