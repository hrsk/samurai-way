import { ConnectedPropsType } from "./UsersContainer"

interface PropsType extends ConnectedPropsType {

}

export const Users = (props: PropsType) => {
    return <>

        {
            props.users.map(user => {
                return (
                    <>
                        {
                            props.users.map(user => {
                                return (
                                    <div key={user.id}>
                                        <div>
                                            <div>{user.id}</div>
                                            <div>{user.name}</div>
                                            <div>{user.status}</div>
                                        </div>
                                        <div>
                                            {
                                                user.followed
                                                    ? <button onClick={() => { }}>FOLLOW</button>
                                                    : <button onClick={() => { }}>UNFOLLOW</button>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                )
            })
        }
    </>
}