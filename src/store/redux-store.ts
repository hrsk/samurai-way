import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "../components/reducers/dialogsReducer";
import { profileReducer } from "../components/reducers/profileReducer";
import { useDispatch } from "react-redux";
import { navbarReducer } from "../components/reducers/navbarReducer";
import { usersReducer } from "../components/reducers/usersReducer";
import { appReducer } from "../components/reducers/appReducer";
import { authReducer } from "../components/reducers/authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import { followingsReducer } from "../components/reducers/followingsReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    app: appReducer,
    auth: authReducer,
    form: formReducer,
    followings: followingsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<ReducersType>

export type AppDispatch = typeof store.dispatch | any

export const useAppDispatch: () => AppDispatch = useDispatch

//@ts-ignore
window.store = store;