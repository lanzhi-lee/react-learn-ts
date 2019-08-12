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
    }
}

