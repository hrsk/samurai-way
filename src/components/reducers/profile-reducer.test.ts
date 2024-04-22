import { addPost, profileReducer, removePost } from "./profileReducer"

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

    const action = addPost('it-incubator')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].text).toBe('it-incubator')
})
test('after deleting length of post array should be decrement', () => {

    const action = removePost(5)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].id).toBe(4)
})

test(`after deleting length of post array shouldn't be decrement if id isn't correct`, () => {

    const action = removePost(100500)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].text).toBe('hgjfhjfgh')
})
