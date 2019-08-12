import React, { Component, ChangeEvent } from 'react'

interface IProps {
    todolist: Array<string>,
    donelist: Array<string>,
    addItemToDone: (item: string) => void,
    reAddItemToTodo: (item: string) => void,
    delItemFromTodo: (index: number) => void,
    delItemFromDone: (index: number) => void,
    updateTodo: (arr: string[]) => void,
    initTodoFlags: (arr: boolean[]) => void,
    updateTodoFlags: (arr: boolean[]) => void,
    todoFlags: boolean[],
    initTodo: (list: string[]) => void,
    initDone: (list: string[]) => void,
}

interface IState {
    todoItemValue: string
}

export default class List extends Component<IProps, IState> {
    public state: IState = {
        todoItemValue: ''
    }

    handleTodoDel = (index: number) => {
        // 此处不可以使用event.target，会报错 EventTarget上没有className
        this.props.delItemFromTodo(index)
    }

    handleDoneDel = (index: number) => {
        this.props.delItemFromDone(index)
    }

    handleTodoChange = (index: number) => {
        // 添加至donelist
        this.props.addItemToDone(this.props.todolist[index])
        // 从todolist中删除
        this.props.delItemFromTodo(index)
    }

    handleDoneChange = (index: number) => {
        this.props.reAddItemToTodo(this.props.donelist[index])
        this.props.delItemFromDone(index)
    }

    handleTodoContentClick = (index: number) => {
        // 显示为input
        this.toggleShowSpanAndInput(index)
        // 更新input的内容
        this.setState({ todoItemValue: this.props.todolist[index] })
    }

    handleTodoContentBlur = (index: number) => {
        let { todolist, updateTodo } = this.props

        this.toggleShowSpanAndInput(index)

        // 未变化就不触发action
        if (todolist[index] === this.state.todoItemValue) return

        todolist[index] = this.state.todoItemValue
        updateTodo([...todolist])
    }

    // 抽取 handleTodoContentClick 和 handleTodoContentBlur 的公共部分进行封装
    toggleShowSpanAndInput = (index: number) => {
        let { todoFlags, updateTodoFlags } = this.props
        todoFlags[index] = !todoFlags[index]
        updateTodoFlags([...todoFlags])
    }

    handleTodoContentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoItemValue: event.currentTarget.value })
    }

    componentDidMount() {

        let { initTodo, initDone } = this.props

        try {
            let todolist: string[] = JSON.parse(String(localStorage.getItem('todolist'))) || []
            let donelist: string[] = JSON.parse(String(localStorage.getItem('donelist'))) || []

            console.warn(todolist)

            // 在此将list初始化显示为span
            let todoFlags = new Array(todolist.length).fill(true)
            this.props.initTodoFlags(todoFlags)

            initTodo(todolist)
            initDone(donelist)

        } catch (error) {
            console.log(error)
        }
        console.log('list mounted')

    }

    render() {
        let { todolist, donelist } = this.props
        console.log(todolist, donelist)
        return (
            <section className="main-list-container">
                <section className="main-list">
                    <h2>正在进行<span className="listcount">{todolist.length}</span></h2>
                    <ul>
                        {
                            todolist.map((item, index) =>
                                (
                                    <li className="todolist" key={index} draggable={true}>
                                        <input type="checkbox" checked={false} readOnly onClick={() => this.handleTodoChange(index)} />
                                        {
                                            this.props.todoFlags[index] ?
                                                <span style={{ width: '400px' }} onClick={() => this.handleTodoContentClick(index)}>{item}</span>
                                                :
                                                <input type="text" style={{ width: '400px' }}
                                                    autoFocus={true}
                                                    value={this.state.todoItemValue}
                                                    onChange={this.handleTodoContentInputChange}
                                                    onBlur={() => this.handleTodoContentBlur(index)}
                                                />
                                        }
                                        {/* eslint-disable-next-line */}
                                        <a onClick={() => this.handleTodoDel(index)}>-</a>
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
                                        <input type="checkbox" checked={true} readOnly onClick={() => this.handleDoneChange(index)} />
                                        <span>{item}</span>
                                        {/* eslint-disable-next-line */}
                                        <a onClick={() => this.handleDoneDel(index)}>-</a>
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