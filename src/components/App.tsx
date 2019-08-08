import React from 'react';

// import Header from './header'
import Header from '../containers/header'
// import List from './list'
import List from '../containers/list'
// import Footer from './footer';
import Footer from '../containers/footer';

interface IProps {
  todolist: Array<string>,
  donelist: Array<string>
}

export default class App extends React.Component<IProps> {

  // 完成更新
  componentDidUpdate() {
    localStorage.setItem('todolist', JSON.stringify(this.props.todolist))
    localStorage.setItem('donelist', JSON.stringify(this.props.donelist))
  }

  // 即将挂载
  componentWillMount() {
    console.log('APP WILL mounted')
  }

  componentDidMount() {


    console.log('APP mounted')
  }

  render() {
    let { todolist, donelist } = this.props
    return (
      <div className="App">
        <Header />
        <List
          {...{ todolist, donelist }} />
        <Footer />
      </div>
    );
  }

}
