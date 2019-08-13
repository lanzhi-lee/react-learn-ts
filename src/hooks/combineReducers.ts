import TYPES from './types'

// state的形状
// type State =  | {} | string
interface State {
    [propName: string]: string[] | boolean[]
}
// action的形状
interface IAction {
    type: TYPES,
    data: null | number | string | string[] | boolean[]
}

// 描述reducer的形状
interface IReducer {
    (preState: State, action: IAction): State
}

interface IObj {
    [propName: string]: IReducer
}

interface ICombineReducers {
    (reducers: { [propName: string]: IReducer }): IFun1
}

interface IFun1 {
    (state: State, action: IAction): IFun2
}

interface IFun2 {

}

interface ITemp1 {
    (state: State, action: IAction): State
}

const combineReducers = (reducers: { [propName: string]: IReducer }) => {

    return (state: any = {}, action: IAction) => {

        let result = Object.keys(reducers).reduce((nextState: { [propName: string]: State }, key: string): { [propName: string]: State } => {
            //key: count,key
            //state[key]:当前遍历的reducer先前的state值
            //nextState[key]:当前遍历的reducer变化后的state值
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
        return result
    };
};

// export { combineReducers }

// export { }

    // const combine = (reducers: any) => {
    //     return (state: { [propName: string]: any } = {}, action: any) => {
    //         let obj: { [propName: string]: any } = {}; // 每次都返回一个新的rootstate
    //         for (let key in reducers) {
    //             // 把每个子reducer的state 赋值给rootState相应的属性上
    //             obj[key] = reducers[key](state[key], action);
    //         }
    //         return obj;
    //     }
    // }

    // let reducers = combine({ todolistReducer, donelistReducer, todoFlagsReducer, })
    // let [data, dispatch] = useReducer(reducers, defaultData)