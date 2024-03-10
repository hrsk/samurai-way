import { PostType, ProfilePageType } from "../../store/store"

export const profileReducer = (state: ProfilePageType, action: any): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: 6,
                text: state.postText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.postText = ''
            return state
        }
        case 'CHANGE_POST_TEXT': {
            state.postText = action.value
            return state

        }
        default: return state
    }
}
