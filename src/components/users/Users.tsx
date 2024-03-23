import { Pagination } from "../pagination/Pagination"
import { ConnectedPropsType } from "./UsersContainer"

interface PropsType extends ConnectedPropsType {
    setPage: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {
    return <>
        <Pagination totalCount={props.totalCount}
            pageSize={10}
            currentPage={1}
            setPage={props.setPage}
        />
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
                                    ? <button onClick={() => { props.unfollow(user.id) }}>UNFOLLOW</button>
                                    : <button onClick={() => { props.follow(user.id) }}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })
        }
    </>
}