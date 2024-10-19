import { combineReducers, createStore } from 'redux'
import { profileReducer } from '../redux/profile-reducer'
import { dialogsReducer } from '../redux/dialogs-reducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>

type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<ReducersType>

//@ts-ignore
window.store = store
