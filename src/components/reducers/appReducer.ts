const IS_FETCHING = 'IS_FETCHING'

type InitialStateType = {
    isFetching: boolean
}

const initialState: InitialStateType = {
    isFetching: false
}


export const appReducer = (state = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'IS_FETCHING': return {
            ...state, isFetching: action.isFetching
        }
        default: return state
    }
}

//types 

export type AppReducerActionType = IsFetchingActionType

export type IsFetchingActionType = {
    type: 'IS_FETCHING'
    isFetching: boolean
}



//actions 

export const fetching = (isFetching: boolean): IsFetchingActionType => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}
