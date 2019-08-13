import React, { useState, ChangeEvent, FormEvent } from 'react'

interface IProps {
    todoFlags: boolean[],
    addItemToTodo: (item: string) => void,
    updateTodoFlags: (arr: boolean[]) => void
}

const Header: React.FC<IProps> = props => {
    const { todoFlags, addItemToTodo, updateTodoFlags } = props

    const [todoInput, setTodoInput] = useState('')

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
        updateTodoFlags(currnetFlags)
        // 添加到todolist中
        addItemToTodo(item)

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