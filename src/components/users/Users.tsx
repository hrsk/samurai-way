import { Pagination } from "../pagination/Pagination"
import { ConnectedPropsType } from "./UsersContainer"
import no_avatar from "../../assets/avatar_images/no_avatar.png"
import { Preloader } from "../../features/Preloader"

interface PropsType extends ConnectedPropsType {
    setPage: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    return <>
        <Pagination totalCount={props.totalCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            setPage={props.setPage}
        />
        {
            props.isFetching && <Preloader />
        }
        {
            props.users.map(user => {
                return (
                    <div key={user.id}>
                        <div>
                            <img style={{ width: '64px', height: '64px' }}
                                src={user.photos.small ? user.photos.large : no_avatar}
                                alt="" />
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