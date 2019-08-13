import React, { useReducer } from 'react';
// eslint-disable-next-line
import { Context, actionCreaters, todolistReducer, donelistReducer, todoFlagsReducer, defaultData, TYPES } from './hooks'


// import Header from './components/header'
import Header from './containers/header'
// import List from './components/list'
import List from './containers/list'
// import Footer from './components/footer'
import Footer from './containers/footer';

const App: React.FC = () => {

    const [todolist, dispatchTodolist] = useReducer(todolistReducer, defaultData.todolist)
    const [donelist, dispatchDonelist] = useReducer(donelistReducer, defaultData.donelist)
    const [todoFlags, dispatchTodoFlags] = useReducer(todoFlagsReducer, defaultData.todoFlags)

    const initTodo = (list: string[]) => dispatchTodolist(actionCreaters.initTodo(list))
    const initDone = (list: string[]) => dispatchDonelist(actionCreaters.initDone(list))
    const initTodoFlags = (list: boolean[]) => dispatchTodoFlags(actionCreaters.initTodoFlags(list))

    const addItemToTodo = (item: string) => dispatchTodolist(actionCreaters.addItemToTodo(item))
    const addItemToDone = (item: string) => dispatchDonelist(actionCreaters.addItemToDone(item))
    const reAddItemToTodo = (item: string) => dispatchTodolist(actionCreaters.reAddItemToTodo(item))

    const delItemFromTodo = (index: number) => dispatchTodolist(actionCreaters.delItemFromTodo(index))
    const delItemFromDone = (index: number) => dispatchDonelist(actionCreaters.delItemFromDone(index))

    const updateTodo = (arr: string[]) => dispatchTodolist(actionCreaters.updateTodo(arr))
    const updateTodoFlags = (arr: boolean[]) => dispatchTodoFlags(actionCreaters.updateTodoFlags(arr))

    const clearAll = () => {
        let { clearAll } = actionCreaters

        dispatchTodolist(clearAll())
        dispatchDonelist(clearAll())
    }

    const actions = {
        initTodo, initDone, initTodoFlags,
        addItemToTodo, addItemToDone, reAddItemToTodo,
        delItemFromTodo, delItemFromDone,
        updateTodoFlags, updateTodo, clearAll,
    }
    return (
        <Context.Provider value={
            {
                // data, dispatch
                data: { todolist, donelist, todoFlags },
                dispatch: { dispatchTodolist, dispatchDonelist, dispatchTodoFlags },
                actions
            }
        }>
            <div className="App">
                <Header />
                <List />
                <Footer />
            </div>
        </Context.Provider >
    )
};

export default App