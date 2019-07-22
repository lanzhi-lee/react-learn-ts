import React, { Component, MouseEvent, FocusEvent, ChangeEvent } from 'react'

interface IProps {
    todolist: Array<string>,
    donelist: Array<string>,
    addItemToDone: (item: string) => void,
    reAddItemToTodo: (item: string) => void,
    delItemFromTodo: (index: number) => void,
    delItemFromDone: (index: number) => void
}

interface IState {
    todoFlags: Array<boolean>
    todoItemValue: string
}

export default class List extends Component<IProps, IState> {
    public state: IState = {
        todoFlags: [],
        todoItemValue: ''
    }

    handleTodoDel = (event: MouseEvent<HTMLAnchorElement>) => {
        // 此处不可以使用event.target，会报错 EventTarget上没有className
        this.props.delItemFromTodo(+event.currentTarget.className)
    }

    handleDoneDel = (event: MouseEvent<HTMLAnchorElement>) => {
        this.props.delItemFromDone(+event.currentTarget.className)
    }

    handleTodoChange = (event: MouseEvent<HTMLInputElement>) => {
        // 找到元素的索引
        let index = +event.currentTarget.className
        // 添加至donelist
        this.props.addItemToDone(this.props.todolist[index])
        // 从todolist中删除
        this.props.delItemFromTodo(index)
    }

    handleDoneChange = (event: MouseEvent<HTMLInputElement>) => {
        let index = +event.currentTarget.className
        this.props.reAddItemToTodo(this.props.donelist[index])
        this.props.delItemFromDone(index)
    }

    handleTodoContentClick = (event: MouseEvent<HTMLSpanElement>) => {
        // 取到对应的index
        let index = +event.currentTarget.className
        // 显示为input
        this.toggleShowSpanAndInput(index)

        this.setState({ todoItemValue: this.props.todolist[index] })
    }

    handleTodoContentBlur = (event: FocusEvent<HTMLInputElement>) => {
        // 取到对应的index
        let index = +event.currentTarget.className
        this.toggleShowSpanAndInput(index)

        this.props.todolist[index] = this.state.todoItemValue
        /**
         * 这里修改props.todolist的值，本以为无法直接修改，要通过父组件的函数来修改。
         * 后来发现，this.props是只读的，但是数组内部的元素是可以修改的
         */
    }

    // 抽取 handleTodoContentClick 和 handleTodoContentBlur 的公共部分进行封装
    toggleShowSpanAndInput = (index: number) => {
        let { todoFlags } = this.state
        todoFlags[index] = !todoFlags[index]
        this.setState({ todoFlags })
    }

    handleTodoContentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoItemValue: event.currentTarget.value })
    }

    componentWillMount() {
        // 在此将list初始化显示为span
        let todoFlags = []
        for (let i = 0; i < this.props.todolist.length; i++) {
            todoFlags.push(true)
        }
        this.setState({ todoFlags })
    }

    componentWillUpdate() {
        let todoFlags = this.state.todoFlags
        let todoFlagsLength = todoFlags.length
        let todolistLength = this.props.todolist.length

        if (todoFlagsLength < todolistLength) {
            for (let i = 0; i < todolistLength - todoFlagsLength; i++) {
                todoFlags.push(true)
            }
            // eslint-disable-next-line
        } else this.state.todoFlags = todoFlags.slice(0, todolistLength)
        // 在此处直接操作了state，同时页面也发生了变化
        // 猜测是因为当前的生命周期函数在执行后，刚好会执行render，因此直接操作的state也会对应的反映到页面上
    }

    render() {
        let { todolist, donelist } = this.props
        return (
            <section className="main-list-container">
                <section className="main-list">
                    <h2>正在进行<span className="listcount">{todolist.length}</span></h2>
                    <ul>
                        {
                            todolist.map((item, index) =>
                                (
                                    <li className="todolist" key={index} draggable={true}>
                                        <input type="checkbox" className={String(index)} checked={false} readOnly onClick={this.handleTodoChange} />
                                        {
                                            this.state.todoFlags[index] ?
                                                <span className={String(index)} onClick={this.handleTodoContentClick}>{item}</span>
                                                :
                                                <input type="text" className={String(index)} style={{ width: '400px' }}
                                                    autoFocus={true}
                                                    value={this.state.todoItemValue}
                                                    onChange={this.handleTodoContentInputChange}
                                                    onBlur={this.handleTodoContentBlur}
                                                />
                                        }
                                        {/* eslint-disable-next-line */}
                                        <a className={String(index)} onClick={this.handleTodoDel}>-</a>
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <h2>已经完成<span className="listcount">{donelist.length}</span></h2>
                    <ul>
                        {
                            donelist.map((item, index) =>
                                (
                                    <li className="donelist" key={index}>
                                        <input type="checkbox" className={String(index)} checked={true} readOnly onClick={this.handleDoneChange} />
                                        <span>{item}</span>
                                        {/* eslint-disable-next-line */}
                                        <a className={String(index)} onClick={this.handleDoneDel}>-</a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </section>
            </section>
        )
    }
}