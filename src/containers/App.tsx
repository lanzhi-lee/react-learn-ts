import { connect } from 'react-redux'

import App from '../components/App'

interface IState {
  todolist: Array<string>,
  donelist: Array<string>,
}

// function mapStateToProps(state: IState): IState {
//   return { todolist: state.todolist, donelist: state.donelist }
// }

// const mapStateToProps = (state: IState): IState => ({ todolist: state.todolist, donelist: state.donelist })

export default connect(
  (state: IState): IState => ({ todolist: state.todolist, donelist: state.donelist }), {}
)(App)
