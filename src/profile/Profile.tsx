import { Posts } from './posts/Posts'

export const Profile = () => {
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
			<Posts />
		</div>
	)
}
