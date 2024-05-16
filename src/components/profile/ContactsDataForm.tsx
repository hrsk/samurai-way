import { UserProfileType } from "../../types";
import { Contact } from "./Contact";
import style from "./Profile.module.css";


type ProfileInfoType = {
    userProfile: UserProfileType,
}

export const ProfileContactsData = (props: ProfileInfoType) => {
    return (
        <div className={style.content}>
            <div>
                <b>Contacts:</b>{Object.entries(props.userProfile.contacts).map((keyValues) => {
                    return <Contact key={keyValues[0]} contactTitle={keyValues[0]} contactValue={keyValues[1]} />
                })}
            </div>
        </div>
    );
}
