import TYPES from './action-type'

// interface State {
//     [propName: string]: string[] | boolean[]
// }

type State = any
interface Action { type: TYPES, data: null | number | string | string[] | boolean[] }
interface Store { [propName: string]: State }
interface Reducer { (preState: State, action: Action): State }
interface Reducers { [propName: string]: Reducer }
interface ICombineReducers { (reducers: Reducers): (state: Store, action: Action) => Store }

export const combineReducers: ICombineReducers = (reducers) => {

    return (state: any = {}, action: Action) => {

        return Object.keys(reducers).reduce(
            (
                nextState: { [propName: string]: State },
                key: string): { [propName: string]: State } => {

                //key: count,key
                //state[key]:当前遍历的reducer先前的state值
                //nextState[key]:当前遍历的reducer变化后的state值
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            }, {})
    };
};

export const combine = (reducers: Reducers) => {
    // const defaultData: Store = { todolist: [], donelist: [], todoFlags: [] }

    return (state: any = {}, action: Action) => {
        // 每次都返回一个新的rootstate
        let store: any = {};
        for (let key in reducers) {
            // 把每个子reducer的state 赋值给rootState相应的属性上
            store[key] = reducers[key](state[key], action);
        }
        return store;
    }
}