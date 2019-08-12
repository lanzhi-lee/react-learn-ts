import React, { useReducer } from 'react';

import { Context, todolistReducer, donelistReducer, todoFlagsReducer, defaultData } from './hooks'

import Header from './components/header'
import List from './components/list'
import Footer from './components/footer';

const App: React.FC = () => {
    const [todolist, dispatchTodolist] = useReducer(todolistReducer, defaultData.todolist)
    const [donelist, dispatchDonelist] = useReducer(donelistReducer, defaultData.donelist)
    const [todoFlags, dispatchTodoFlags] = useReducer(todoFlagsReducer, defaultData.todoFlags)

    return (
        <Context.Provider value={
            {
                data: { todolist, donelist, todoFlags },
                dispatch: { dispatchTodolist, dispatchDonelist, dispatchTodoFlags }
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