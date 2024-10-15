import {
	ActionsType,
	addPostAC,
	changePostTextAC,
	PostType,
} from '../../redux/profile-reducer'
import { Posts } from './Posts'

type PropsType = {
	posts: PostType[]
	newPostText: string
	dispatch: (action: ActionsType) => void
}

export const PostsContainer = (props: PropsType) => {
	const addPost = () => {
		props.dispatch(addPostAC())
	}

	const changePostText = (value: string) => {
		props.dispatch(changePostTextAC(value))
	}

	return <Posts addPost={addPost} changePostText={changePostText} {...props} />
}
