import React, { useState, useEffect, ChangeEvent } from 'react'

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

const List: React.FC<IProps> = props => {

    const [todoItemValue, setTodoItemValue] = useState('')

    const { todolist, donelist, todoFlags,
        initTodo, initDone, initTodoFlags,
        addItemToDone, reAddItemToTodo,
        delItemFromTodo, delItemFromDone,
        updateTodo, updateTodoFlags,
    } = props

    const handleTodoDel = (index: number) => {
        // 此处不可以使用event.target，会报错 EventTarget上没有className
        delItemFromTodo(index)

        // 同时更新flags
        let currentFlags = [...todoFlags]
        currentFlags.pop()
        updateTodoFlags(currentFlags)
    }

    const handleDoneDel = (index: number) => {
        delItemFromDone(index)
    }

    const handleTodoChange = (index: number) => {
        // 添加至donelist
        let currentItem = todolist[index]
        addItemToDone(currentItem)

        // 从todolist中删除
        delItemFromTodo(index)

        // 同时更新flags
        let currentFlags = [...todoFlags]
        currentFlags.pop()
        updateTodoFlags(currentFlags)
    }

    const handleDoneChange = (index: number) => {
        // 从done中删除之前要更新 todoflags，保证todo和todoflags的长度一致，否则会出现异常
        let currentFlags = [...todoFlags, true]
        updateTodoFlags(currentFlags)

        let currentItem = donelist[index]
        reAddItemToTodo(currentItem)
        delItemFromDone(index)
    }

    const handleTodoContentClick = (index: number) => {
        // 显示为input
        toggleShowSpanAndInput(index)
        // 更新input的内容
        setTodoItemValue(todolist[index])
    }

    const handleTodoContentBlur = (index: number) => {
        toggleShowSpanAndInput(index)

        // 未变化就不触发action
        if (todolist[index] === todoItemValue) return

        let currentArr = [...todolist]
        currentArr[index] = todoItemValue
        updateTodo(currentArr)
    }

    // 抽取 handleTodoContentClick 和 handleTodoContentBlur 的公共部分进行封装
    const toggleShowSpanAndInput = (index: number) => {
        let currentFlags = [...todoFlags]
        currentFlags[index] = !currentFlags[index]
        updateTodoFlags(currentFlags)
    }

    const handleTodoContentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoItemValue(event.currentTarget.value)
    }

    // 初始化显示
    useEffect(() => {
        try {
            let localTodolist: string[] = JSON.parse(String(localStorage.getItem('todolist'))) || []
            let localDonelist: string[] = JSON.parse(String(localStorage.getItem('donelist'))) || []

            // 在此将list初始化显示为span
            let localTodoFlags: boolean[] = new Array(localTodolist.length).fill(true)

            initTodoFlags(localTodoFlags)
            initTodo(localTodolist)
            initDone(localDonelist)
        } catch (error) {
            console.log(error)
        }
        console.log('list mounted')
    },
        // eslint-disable-next-line
        [])

    // 完成更新后设置缓存
    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todolist))
        localStorage.setItem('donelist', JSON.stringify(donelist))
    })

    useEffect(() => {
        console.log('todolist.length :', todolist.length)
    }, [todolist.length])

    return (
        <section className="main-list-container">
            <section className="main-list">
                <h2>正在进行<span className="listcount">{todolist.length}</span></h2>
                <ul>
                    {
                        todolist.map((item: string, index: number) =>
                            (
                                <li className="todolist" key={index} draggable={true}>
                                    <input type="checkbox" checked={false} readOnly onClick={() => handleTodoChange(index)} />
                                    {
                                        todoFlags[index] ?
                                            <span style={{ width: '400px' }} onClick={() => handleTodoContentClick(index)}>{item}</span>
                                            :
                                            <input type="text" style={{ width: '400px' }}
                                                autoFocus={true}
                                                value={todoItemValue}
                                                onChange={handleTodoContentInputChange}
                                                onBlur={() => handleTodoContentBlur(index)}
                                            />
                                    }
                                    {/* eslint-disable-next-line */}
                                    <a onClick={() => handleTodoDel(index)}>-</a>
                                </li>
                            )
                        )
                    }
                </ul>

                <h2>已经完成<span className="listcount">{donelist.length}</span></h2>
                <ul>
                    {
                        donelist.map((item: string, index: number) =>
                            (
                                <li className="donelist" key={index}>
                                    <input type="checkbox" checked={true} readOnly onClick={() => handleDoneChange(index)} />
                                    <span>{item}</span>
                                    {/* eslint-disable-next-line */}
                                    <a onClick={() => handleDoneDel(index)}>-</a>
                                </li>
                            )
                        )
                    }
                </ul>
            </section>
        </section>
    )
}

export default List