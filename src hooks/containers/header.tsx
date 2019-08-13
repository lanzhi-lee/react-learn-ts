import React from 'react'
import Header from '../components/header'
import { Context } from '../hooks'

interface IProps {
    todoFlags: boolean[],
    addItemToTodo: (item: string) => void,
    updateTodoFlags: (arr: boolean[]) => void
}

const wrapHeader = (WrappedComponent: React.FC<IProps>) => {
    class newComponent extends React.Component {
        static contextType = Context

        render() {
            let { todoFlags } = this.context.data
            let { addItemToTodo, updateTodoFlags } = this.context.actions
            return <WrappedComponent {...{ todoFlags, addItemToTodo, updateTodoFlags }} />
        }
    }

    return newComponent

}

export default wrapHeader(Header)