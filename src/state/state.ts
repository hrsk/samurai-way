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

export type MessagesPageType = {
	dialogs: DialogType[]
}

export type ProfilePageType = {
	posts: PostType[]
}

export type CustomStateType = {
	messagesPage: MessagesPageType
	profilePage: ProfilePageType
}

export const customState: CustomStateType = {
	messagesPage: {
		dialogs: [
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
		],
	},
	profilePage: {
		posts: [
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
		],
	},
}