import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"

type PropsType = {
    status: string
    changeUserStatusHandler: (value: string) => void
    setUserStatusHandler: (value: string) => void
}


export const ProfileStatusWithHooks = (props: PropsType) => {

    useEffect(() => {
        props.setUserStatusHandler(props.status)
    }, [props.status])

    const [value, setValue] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const editModeHandler = () => {
        setEditMode(true)
    }
    const changeStatusHandler = () => {
        setEditMode(false)
        props.changeUserStatusHandler(value)
    }

    const onKeyPressHandler = (e: KeyboardEvent) => {
        const { key } = e;

        if (key === 'Enter') {
            changeStatusHandler()
        }
    }

    return (
        editMode
            ? <input value={value}
                onChange={onChangeHandler}
                onBlur={changeStatusHandler}
                autoFocus
                onKeyDown={onKeyPressHandler} />
            : <span onDoubleClick={editModeHandler}>
                {
                    props.status
                        ? props.status
                        : 'empty status'
                }
            </span>
    )
}