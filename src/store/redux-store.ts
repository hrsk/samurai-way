import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "../components/reducers/dialogsReducer";
import { profileReducer } from "../components/reducers/profileReducer";
import { useDispatch } from "react-redux";
import { navbarReducer } from "../components/reducers/navbarReducer";
import { usersReducer } from "../components/reducers/usersReducer";
import { appReducer } from "../components/reducers/appReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    app: appReducer,
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>

type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<ReducersType>

export type AppDispatch = typeof store.dispatch | any

export const useAppDispatch: () => AppDispatch = useDispatch

//@ts-ignore
window.store = store;