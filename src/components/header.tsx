import React, { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { Context, TYPES } from '../hooks'
import IContext from '../types/IContext'

const Header: React.FC = props => {
    const [todoInput, setTodoInput] = useState('')

    const { data: contextData, dispatch: contextDispatch } = useContext(Context) as IContext
    const { todoFlags } = contextData
    const { dispatchTodolist, dispatchTodoFlags } = contextDispatch

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // 取出input中的值
        let item = todoInput.trim()

        // 为空则退出
        if (!item) return alert('不可以输入空值哦~')

        // 更新todoflags
        let currnetFlags = [true, ...todoFlags]
        dispatchTodoFlags({ type: TYPES.UPDATE_TODO_FLAGS, data: currnetFlags })
        // 添加到todolist中
        dispatchTodolist({ type: TYPES.ADD_ITEM_TO_TODO, data: item })

        // 输入框置空
        setTodoInput('')
        // 阻止默认行为
        event.preventDefault()
    }

    return (
        <header>
            <section className="header-form">
                <form onSubmit={handleSubmit}>
                    <label>TodoList</label>
                    <input type="text" placeholder=" 添加todo" value={todoInput} onChange={handleChange} />
                </form>
            </section>
        </header>
    )
}

export default Header