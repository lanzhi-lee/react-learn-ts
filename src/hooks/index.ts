import TYPES from './types'

// import { todolistContext, donelistContext, todoFlagsContext, } from './context'
import { Context } from './context'
import { todolistReducer, donelistReducer, todoFlagsReducer } from './reducers'

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

export {
    TYPES,
    defaultData,

    Context,
    // todolistContext,
    // donelistContext,
    // todoFlagsContext,

    todolistReducer,
    donelistReducer,
    todoFlagsReducer
}