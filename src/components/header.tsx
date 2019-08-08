import React, { Component, ChangeEvent, FormEvent } from 'react'

interface IProps {
    todoFlags: boolean[],
    addItemToTodo: (item: string) => void,
    updateTodoFlags: (arr: boolean[]) => void
}

interface IState {
    todoInput: string
}

export default class Header extends Component<IProps, IState>{
    public state: IState = { todoInput: '' }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoInput: event.target.value })
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        let { addItemToTodo, updateTodoFlags, todoFlags } = this.props
        // 取出input中的值
        let item = this.state.todoInput.trim()
        // 为空则退出
        if (!item) return alert('不可以输入空值哦~')

        // 更新todoflags
        updateTodoFlags([true, ...todoFlags])

        // 添加到todolist中
        addItemToTodo(item)

        // 输入框置空
        this.setState({ todoInput: '' })
        // 阻止默认行为
        event.preventDefault()
    }

    render() {
        return (
            <header>
                <section className="header-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>TodoList</label>
                        <input type="text" placeholder=" 添加todo" value={this.state.todoInput} onChange={this.handleChange} />
                    </form>
                </section>
            </header>
        )
    }
}
