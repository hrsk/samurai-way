import { Preloader } from "../../features/Preloader"
import { Pagination } from "../pagination/Pagination"
import { User } from "../users/User"
import { ConnectedPropsType } from "./FollowingContainer"

interface PropsType extends ConnectedPropsType {
    setCurrentPage: (pageNumber: number) => void
    subscribe: (userId: number) => void
    unsubscribe: (userId: number) => void
}

export const Followings = (props: PropsType) => {
    return (
        <div>
            <Pagination totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
            {
                props.isFetching
                    ? <Preloader />
                    : props.followings.map(user => <User user={user}
                        isFollow={props.isFollow}
                        subscribe={props.subscribe}
                        unsubscribe={props.unsubscribe} />
                    )
            }
        </div>
    )
}