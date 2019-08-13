export default interface IContext {
    data: {
        todolist: string[],
        donelist: string[],
        todoFlags: boolean[]
    },
    dispatch: {
        dispatchTodolist: (param: {}) => void,
        dispatchDonelist: (param: {}) => void,
        dispatchTodoFlags: (param: {}) => void
    },
    actions: {
        initTodo: (param: string[]) => void,
        initDone: (param: string[]) => void,
        initTodoFlags: (param: boolean[]) => void,

        addItemToTodo: (param: string) => void,
        addItemToDone: (param: string) => void,
        reAddItemToTodo: (param: string) => void,

        delItemFromTodo: (param: number) => void,
        delItemFromDone: (param: number) => void,

        updateTodoFlags: (param: boolean[]) => void,
        updateTodo: (param: string[]) => void,
        
        clearAll: () => void,
    }
}

