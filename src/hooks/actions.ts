import TYPES from './types'

export const initTodo = (list: string[]) => ({ type: TYPES.INIT_TODO, data: list })
export const initDone = (list: string[]) => ({ type: TYPES.INIT_DONE, data: list })
export const initTodoFlags = (list: boolean[]) => ({ type: TYPES.INIT_TODO_FLAGS, data: list })

export const addItemToTodo = (item: string) => ({ type: TYPES.ADD_ITEM_TO_TODO, data: item })
export const addItemToDone = (item: string) => ({ type: TYPES.ADD_ITEM_TO_DONE, data: item })
export const reAddItemToTodo = (item: string) => ({ type: TYPES.ADD_ITEM_TO_TODO_FROM_DONE, data: item })

export const delItemFromTodo = (index: number) => ({ type: TYPES.DEL_ITEM_FROM_TODO, data: index })
export const delItemFromDone = (index: number) => ({ type: TYPES.DEL_ITEM_FROM_DONE, data: index })

export const updateTodoFlags = (arr: boolean[]) => ({ type: TYPES.UPDATE_TODO_FLAGS, data: arr })
export const updateTodo = (arr: string[]) => ({ type: TYPES.UPDATE_TODO, data: arr })

export const clearAll = () => ({ type: TYPES.CLEARALL, data: null })