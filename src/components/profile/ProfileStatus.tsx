import { ChangeEvent, useState } from "react";
import { ConnectedPropsType } from "./ProfileContainer";

interface PropsType extends ConnectedPropsType { }

export const ProfileStatus = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.status)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const changeStatusHandler = () => {
        setEditMode(false)
        props.changeUserStatus(value)
    }

    return (
        <>
            {
                editMode
                    ? <input value={value}
                        onChange={onChangeHandler}
                        onBlur={changeStatusHandler}
                        autoFocus />
                    : <span onDoubleClick={() => setEditMode(true)}>
                        {
                            props.status
                                ? props.status
                                : 'empty status'
                        }
                    </span>
            }
        </>
    )
}
