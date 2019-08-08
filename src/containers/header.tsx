import Header from '../components/header'
import { connect } from 'react-redux'
import { addItemToTodo, updateTodoFlags } from '../redux/actions'

interface IState {
    todoFlags: boolean[]
}

export default connect(
    (state: IState) => ({ todoFlags: state.todoFlags }),
    { addItemToTodo, updateTodoFlags }
)(Header)