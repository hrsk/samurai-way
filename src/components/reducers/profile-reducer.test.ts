import { addPost, profileReducer } from "./profileReducer"

let state: any

beforeEach(() => {

    state = {
        posts: [
            { id: 1, text: 'asdasdasd', likesCount: 99 },
            { id: 2, text: 'asdasdzxc', likesCount: 11 },
            { id: 3, text: 'zxccv', likesCount: 22 },
            { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
            { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
        ],
    }

})

test('length of posts array should be incremented', () => {

    const action = addPost('it-incubator')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)

})

test('text of new post should be correct', () => {

    const state: any = {
        posts: [
            { id: 1, text: 'asdasdasd', likesCount: 99 },
            { id: 2, text: 'asdasdzxc', likesCount: 11 },
            { id: 3, text: 'zxccv', likesCount: 22 },
            { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
            { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
        ],
    }

    const action = addPost('it-incubator')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].text).toBe('it-incubator')
})
