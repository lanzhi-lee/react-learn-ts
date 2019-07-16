import React from 'react';
import Header from './components/header'
import List from './components/list'
import Footer from './components/footer';

interface IProps {

}

interface IState {
  todolist: Array<string>,
  donelist: Array<string>,
}

export default class App extends React.Component<IProps, IState> {
  public state: IState = {
    todolist: ['吃饭', '睡觉', '学习'],
    donelist: ['打豆豆']
  }

  // 添加元素到todo
  addItemToTodo = (item: string) => {
    if (!item) return
    let { todolist } = this.state
    todolist.unshift(item)
    this.setState({ todolist })
  }

  // 添加元素到done
  addItemToDone = (item: string) => {
    if (!item) return
    let { donelist } = this.state
    donelist.unshift(item)
    this.setState({ donelist })
  }

  // 重新添加元素到todo（数组加到末尾）
  reAddItemToTodo = (item: string) => {
    let { todolist } = this.state
    // 添加到todolist
    todolist.push(item)
    this.setState({ todolist })
  }

  // 删除元素从todo
  delItemFromTodo = (index: number) => {
    let { todolist } = this.state
    todolist.splice(index, 1)
    this.setState({ todolist })
  }

  // 删除元素从done
  delItemFromDone = (index: number) => {
    let { donelist } = this.state
    donelist.splice(index, 1)
    this.setState({ donelist })
  }

  // 清除全部
  clearAll = () => {
    this.setState({ todolist: [], donelist: [] })
  }

  // 完成更新
  componentDidUpdate() {
    localStorage.setItem('todolist', JSON.stringify(this.state.todolist))
    localStorage.setItem('donelist', JSON.stringify(this.state.donelist))
  }
  // 即将挂载
  componentWillMount() {
    /**
     * 此处报错：
     * 
     * 类型“string | null”的参数不能赋给类型“string”的参数。不能将类型“null”分配给类型“string”
     * 
     * 使用 <string> 类型断言或者强制转换为字符串，在经过JSON.parse()后可能会出现未知的错误
     *  */
    let todolist: Array<string> = JSON.parse(localStorage.getItem('todolist') || '') || []
    let donelist: Array<string> = JSON.parse(localStorage.getItem('donelist') || '') || []

    this.setState({ todolist, donelist })
  }

  render() {
    return (
      <div className="App">
        <Header addItemToTodo={this.addItemToTodo} />
        <List
          {...this.state}
          {...{
            addItemToDone: this.addItemToDone,
            reAddItemToTodo: this.reAddItemToTodo,
            delItemFromTodo: this.delItemFromTodo,
            delItemFromDone: this.delItemFromDone
          }}
        />
        <Footer clearAll={this.clearAll} />
      </div>
    );
  }

}
