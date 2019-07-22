import React from 'react';
import Header from '../components/header'
import List from '../components/list'
import Footer from '../components/footer';

interface IProps {

}

interface IState {
  todolist: Array<string>,
  donelist: Array<string>,
}

enum AddSource { HEADER, TODO, DONE }
enum DelSource { TODO, DONE }
export default class Home extends React.Component<IProps, IState> {
  public state: IState = { todolist: [], donelist: [] }

  // 抽取添加元素的方法进行封装
  addItem = (item: string, source: AddSource) => {
    if (!item) return
    let { todolist, donelist } = this.state

    switch (source) {
      // HEADER 是从header中的input向todolist中添加元素
      case AddSource.HEADER: {
        todolist.unshift(item)
        this.setState({ todolist })
        break;
      }
      // TODO 是从todolist中向donelist中添加元素
      case AddSource.TODO: {
        donelist.unshift(item)
        this.setState({ donelist })
        break;
      }
      // DONE 是从donelist中向todolist中添加元素
      case AddSource.DONE: {
        todolist.push(item)
        this.setState({ todolist })
        break;
      }
      default: {
        return
      }
    }
  }

  // 抽取删除元素的方法进行分封装
  delItem = (index: number, source: DelSource) => {
    switch (source) {
      case DelSource.TODO: {
        let { todolist } = this.state
        todolist.splice(index, 1)
        this.setState({ todolist })
        break;
      }
      case DelSource.DONE: {
        let { donelist } = this.state
        donelist.splice(index, 1)
        this.setState({ donelist })
        break;
      }
      default: {
        return
      }
    }
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
     * 解决办法：
     * 使用 <string> 类型断言或者强制转换为字符串，在经过JSON.parse()后可能会出现未知的错误
     * 
     * 最终解决：
     * 上面的方法，在getItem为null时，给JSON.parse的输入为 '' ,会抛出 SyntaxError: Unexpected end of JSON input 异常
     * 最终仍决定使用强制类型转换，将getItem获得的null，转为 'null' 在下一次判断时解决
     *  */

    /**
     * try catch在这里本来是在测试时候使用的，但是发现，如果有错误，会直接影响页面显示，所以被保留了下来
     */

    try {
      let todolist: Array<string> = JSON.parse(String(localStorage.getItem('todolist'))) || []
      let donelist: Array<string> = JSON.parse(String(localStorage.getItem('donelist'))) || []
      this.setState({ todolist, donelist })

    } catch (error) {
      console.log(error)
    }
  }

  // 以下六个方法传递给子组件使用
  addItemToTodo = (item: string) => { this.addItem(item, AddSource.HEADER) }
  addItemToDone = (item: string) => { this.addItem(item, AddSource.TODO) }
  reAddItemToTodo = (item: string) => { this.addItem(item, AddSource.DONE) }
  delItemFromTodo = (index: number) => { this.delItem(index, DelSource.TODO) }
  delItemFromDone = (index: number) => { this.delItem(index, DelSource.DONE) }

  // 清除全部
  clearAll = () => { this.setState({ todolist: [], donelist: [] }) }

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
