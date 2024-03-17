import { NavbarItemType } from "../../types"

type InitialStateType = {
    navbarItems: NavbarItemType[]
}

const initialState: InitialStateType = {
    navbarItems: [
        { id: 1, title: 'Profile' },
        { id: 2, title: 'News' },
        { id: 3, title: 'Friends' },
        { id: 4, title: 'Messages' },
        { id: 5, title: 'Music' },
        { id: 6, title: 'Video' },
        { id: 7, title: 'Settings' },
        { id: 8, title: 'Users' },
    ],
}
export const navbarReducer = (state = initialState, action: any): InitialStateType => {
    debugger
    switch (action.type) {
        default: return state
    }
}