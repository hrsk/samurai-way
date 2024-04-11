import { useState } from "react";
import { ConnectedPropsType } from "./ProfileContainer";

interface PropsType extends ConnectedPropsType { }

export const ProfileStatus = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    return (
        <>
            {
                editMode
                    ? <input onBlur={() => setEditMode(false)} />
                    : <span onDoubleClick={() => setEditMode(true)}>
                        {props.status}
                    </span>
            }
        </>
    )
}
