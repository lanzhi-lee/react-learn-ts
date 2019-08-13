import React from 'react'
import List from '../components/list'
import { Context } from '../hooks'

interface IProps {
    todolist: Array<string>,
    donelist: Array<string>,
    todoFlags: boolean[],

    initTodo: (list: string[]) => void,
    initDone: (list: string[]) => void,
    initTodoFlags: (arr: boolean[]) => void,

    addItemToDone: (item: string) => void,
    reAddItemToTodo: (item: string) => void,

    delItemFromTodo: (index: number) => void,
    delItemFromDone: (index: number) => void,

    updateTodo: (arr: string[]) => void,
    updateTodoFlags: (arr: boolean[]) => void,
}

const wrapList = (WrappedComponent: React.FC<IProps>) => {
    class newComponent extends React.Component {
        static contextType = Context

        render() {
            let { todolist, donelist, todoFlags } = this.context.data
            let { initTodo, initDone, initTodoFlags,
                addItemToDone, reAddItemToTodo,
                delItemFromTodo, delItemFromDone,
                updateTodo, updateTodoFlags, } = this.context.actions

            return <WrappedComponent {...{
                todolist, donelist, todoFlags,
                initTodo, initDone, initTodoFlags,
                addItemToDone, reAddItemToTodo,
                delItemFromTodo, delItemFromDone,
                updateTodo, updateTodoFlags,
            }} />
        }
    }

    return newComponent
}

export default wrapList(List)