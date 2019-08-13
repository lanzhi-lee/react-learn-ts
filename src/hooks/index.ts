// import TYPES from './types'

// import { todolistContext, donelistContext, todoFlagsContext, } from './context'
import { Context } from './context'
import {
    todolistReducer as todolist,
    donelistReducer as donelist,
    todoFlagsReducer as todoFlags
} from './reducers'

import {
    initTodo, initDone, initTodoFlags,
    addItemToTodo, addItemToDone, reAddItemToTodo,
    delItemFromTodo, delItemFromDone,
    updateTodoFlags, updateTodo, clearAll,
} from './actions'

// eslint-disable-next-line
import { combine, combineReducers } from './combine'

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

// 应该使reducer和对应的 默认数据以及state同名 否则 在多次初始化中会出现特殊的问题
// const reducers = combine({ todolist, donelist, todoFlags, })
const reducers = combineReducers({ todolist, donelist, todoFlags, })

export {
    Context,
    reducers,
    defaultData,
    actionCreaters
}