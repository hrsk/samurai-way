import { PostType } from '..'
import { Posts } from './posts/Posts'

type PropsType = {
	posts: PostType[]
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
			<Posts posts={props.posts} />
		</div>
	)
}
