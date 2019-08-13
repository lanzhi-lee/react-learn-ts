import TYPES from './types'

// import { todolistContext, donelistContext, todoFlagsContext, } from './context'
import { Context } from './context'
import { todolistReducer, donelistReducer, todoFlagsReducer } from './reducers'

import {
    initTodo, initDone, initTodoFlags,
    addItemToTodo, addItemToDone, reAddItemToTodo,
    delItemFromTodo, delItemFromDone,
    updateTodoFlags, updateTodo, clearAll,
} from './actions'

interface defaultData {
    todolist: string[]
    donelist: string[]
    todoFlags: boolean[]
}

const defaultData: defaultData = {
    todolist: [],
    donelist: [],
    todoFlags: []
}

const actionCreaters = {
    initTodo, initDone, initTodoFlags,
    addItemToTodo, addItemToDone, reAddItemToTodo,
    delItemFromTodo, delItemFromDone,
    updateTodoFlags, updateTodo, clearAll,
}

export {
    TYPES,
    defaultData,

    Context,
    // todolistContext,
    // donelistContext,
    // todoFlagsContext,

    todolistReducer,
    donelistReducer,
    todoFlagsReducer,

    actionCreaters
}