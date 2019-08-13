import React, { useReducer } from 'react';
import { Context, reducers, defaultData, actionCreaters } from './hooks'

import Header from './containers/header'
import List from './containers/list'
import Footer from './containers/footer';

const App: React.FC = () => {
    const [data, dispatch] = useReducer(reducers, defaultData)

    const initTodo = (list: string[]) => dispatch(actionCreaters.initTodo(list))
    const initDone = (list: string[]) => dispatch(actionCreaters.initDone(list))
    const initTodoFlags = (list: boolean[]) => dispatch(actionCreaters.initTodoFlags(list))

    const addItemToTodo = (item: string) => dispatch(actionCreaters.addItemToTodo(item))
    const addItemToDone = (item: string) => dispatch(actionCreaters.addItemToDone(item))
    const reAddItemToTodo = (item: string) => dispatch(actionCreaters.reAddItemToTodo(item))

    const delItemFromTodo = (index: number) => dispatch(actionCreaters.delItemFromTodo(index))
    const delItemFromDone = (index: number) => dispatch(actionCreaters.delItemFromDone(index))

    const updateTodo = (arr: string[]) => dispatch(actionCreaters.updateTodo(arr))
    const updateTodoFlags = (arr: boolean[]) => dispatch(actionCreaters.updateTodoFlags(arr))

    // 原本需要dispatch两次，分别更改todo和done，合并后仅需dispatch一次
    const clearAll = () => dispatch(actionCreaters.clearAll())

    const actions = {
        initTodo, initDone, initTodoFlags,
        addItemToTodo, addItemToDone, reAddItemToTodo,
        delItemFromTodo, delItemFromDone,
        updateTodoFlags, updateTodo, clearAll,
    }

    return (
        <Context.Provider value={{ data, actions }}>
            <div className="App">
                <Header />
                <List />
                <Footer />
            </div>
        </Context.Provider >
    )
};

export default App