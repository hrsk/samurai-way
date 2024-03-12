import { NavbarItemType } from "../../store/store"

type InitialStateType = {
    items: NavbarItemType[]
}

const initialState: InitialStateType = {
    items: [
        { id: 1, title: 'Profile' },
        { id: 2, title: 'News' },
        { id: 3, title: 'Friends' },
        { id: 4, title: 'Messages' },
        { id: 5, title: 'Music' },
        { id: 6, title: 'Video' },
        { id: 7, title: 'Settings' },
    ],
}
export const navbarReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default: return state
    }
}