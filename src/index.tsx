import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

export type DialogType = {
	id: number
	userName: string
	messageText: string
}
export type PostType = {
	id: number
	userName: string
	postText: string
}

export const dialogs = [
	{
		id: 1,
		userName: 'Dimych',
		messageText:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
	},
	{
		id: 2,
		userName: 'Viktor',
		messageText:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
	},
	{
		id: 3,
		userName: 'Valera',
		messageText:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
	},
	{
		id: 4,
		userName: 'Sveta',
		messageText:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
	},
	{
		id: 5,
		userName: 'Igor',
		messageText:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
	},
]

export const posts = [
	{
		id: 1,
		userName: 'Dassler',
		postText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
	},
	{
		id: 2,
		userName: 'Dassler',
		postText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
	},
	{
		id: 3,
		userName: 'Dassler',
		postText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
	},
]

ReactDOM.render(
	<BrowserRouter>
		<App dialogs={dialogs} posts={posts} />
	</BrowserRouter>,
	document.getElementById('root')
)
