import List from '../components/list'
import { connect } from 'react-redux'

import { initTodo, initDone, addItemToDone, reAddItemToTodo, delItemFromTodo, delItemFromDone, updateTodo, initTodoFlags, updateTodoFlags } from '../redux/actions'

interface IState {
    todolist: Array<string>,
    donelist: Array<string>,
    todoFlags: boolean[]
}

export default connect(

    (state: IState): IState => ({ todolist: state.todolist, donelist: state.donelist, todoFlags: state.todoFlags }),
    { addItemToDone, reAddItemToTodo, delItemFromTodo, delItemFromDone, updateTodo, initTodoFlags, updateTodoFlags, initTodo, initDone }
)(List)