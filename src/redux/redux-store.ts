import {applyMiddleware, combineReducers, createStore} from 'redux'
import { dialogsReducer } from '../reducers/dialogs-reducer'
import { profileReducer } from '../reducers/profile-reducer'
import { usersReducer } from '../reducers/users-reducer'
import {authorizationReducer} from "../reducers/auth-reducer";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	findUsersPage: usersReducer,
	authorizationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootStateType = ReturnType<typeof store.getState>

type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<ReducersType>

//@ts-ignore
window.store = store
