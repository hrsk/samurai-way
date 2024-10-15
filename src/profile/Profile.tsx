import { MyContext } from '..'
import { PostsContainer } from './posts/PostsContainer'

type PropsType = {
	// posts: PostType[]
	// newPostText: string
	// dispatch: (action: any) => void
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
			<MyContext.Consumer>
				{value => (
					<PostsContainer
						posts={value.getState().profilePage.posts}
						dispatch={value.dispatch}
						newPostText={value.getState().profilePage.newPostText}
					/>
				)}
			</MyContext.Consumer>
		</div>
	)
}
