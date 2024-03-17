import { ConnectedPropsType } from "./UsersContainer"

interface PropsType extends ConnectedPropsType {

}

export const Users = (props: PropsType) => {
    return <>
        USERS

        {
            props.users.map(user => {
                return (
                    <span>
                        {
                            user.name
                        }
                    </span>
                )
            })
        }
    </>
}