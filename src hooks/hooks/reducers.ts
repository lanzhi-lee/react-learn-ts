import TYPES from './types'

function todolistReducer(state: string[], action: { type: TYPES, data: any }) {
    switch (action.type) {
        case TYPES.INIT_TODO: {
            console.log(TYPES.INIT_TODO)
            return action.data
        }
        case TYPES.ADD_ITEM_TO_TODO: {
            console.log(TYPES.ADD_ITEM_TO_TODO)
            return [action.data, ...state]
        }
        case TYPES.ADD_ITEM_TO_TODO_FROM_DONE: {
            console.log(TYPES.ADD_ITEM_TO_TODO_FROM_DONE)
            return [...state, action.data]
        }
        case TYPES.DEL_ITEM_FROM_TODO: {
            console.log(TYPES.DEL_ITEM_FROM_TODO)
            return state.filter((item, index) => index !== action.data)
        }
        case TYPES.UPDATE_TODO: {
            console.log(TYPES.UPDATE_TODO)
            return action.data
        }
        case TYPES.CLEARALL: {
            console.log(TYPES.CLEARALL)
            return []
        }
        default: return state
    }
};

function donelistReducer(state: string[], action: { type: any, data: any }) {
    switch (action.type) {
        case TYPES.INIT_DONE: {
            return action.data
        }
        case TYPES.ADD_ITEM_TO_DONE: {
            return [action.data, ...state]
        }
        case TYPES.DEL_ITEM_FROM_DONE: {
            return state.filter((item, index) => index !== action.data)
        }
        case TYPES.CLEARALL: {
            return []
        }
        default: return state
    }
}

function todoFlagsReducer(state: boolean[], action: { type: any, data: any }) {
    switch (action.type) {
        case TYPES.INIT_TODO_FLAGS: {
            return action.data
        }
        case TYPES.UPDATE_TODO_FLAGS: {
            return action.data
        }
        default: return state
    }
}

export { todolistReducer, donelistReducer, todoFlagsReducer }