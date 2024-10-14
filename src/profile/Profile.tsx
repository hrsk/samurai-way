import { PostType } from '../state/state'
import { Posts } from './posts/Posts'

type PropsType = {
	posts: PostType[]
	// addPost: () => void
	// onChangeTextPost: (value: string) => void
	newPostText: string
	dispatch: (action: any) => void
}

export const Profile = (props: PropsType) => {
	return (
		<div>
			<div>
				<div>image wallpaper</div>
				<div>
					<img src='' alt='avatar' />
				</div>
				<div>date of birth</div>
				<div>city</div>
				<div>education</div>
				<div>website</div>
			</div>
			<Posts
				posts={props.posts}
				// addPost={props.addPost}
				dispatch={props.dispatch}
				newPostText={props.newPostText}
				// onChangeTextPost={props.onChangeTextPost}
			/>
		</div>
	)
}
