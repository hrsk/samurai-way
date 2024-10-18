import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import {
	addPostAC,
	changePostTextAC,
	PostType,
} from '../../redux/profile-reducer'
import { AppStateType } from '../../store/redux-store'
import { Posts } from './Posts'

type MapStateToPropsType = {
	posts: PostType[]
	newPostText: string
}

type MapDispatchToPropsType = {
	addPost: () => void
	changePostText: (value: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addPost: () => {
			dispatch(addPostAC())
		},
		changePostText: (value: string) => {
			dispatch(changePostTextAC(value))
		},
	}
}

export type PostsPropsType = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType

const connector = connect(mapStateToProps, mapDispatchToProps)

// export const PostsContainer = connector(PostsConnectedComponent)

export const PostsContainer = connector(Posts)
