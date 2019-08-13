enum TYPES {
    // 增删改查

    // 初始化
    INIT_TODO = 'INIT_TODO',
    INIT_DONE = 'INIT_DONE',

    // 向todo增加一条
    ADD_ITEM_TO_TODO = 'ADD_ITEM_TO_TODO',
    ADD_ITEM_TO_TODO_FROM_DONE = 'ADD_ITEM_TO_TODO_FROM_DONE',

    // 更新todo
    UPDATE_TODO = 'UPDATE_TODO',

    // 向done增加一条
    ADD_ITEM_TO_DONE = 'ADD_ITEM_TO_DONE',
    // 从todo删除一条
    DEL_ITEM_FROM_TODO = 'DEL_ITEM_FROM_TODO',
    // 从done删除一条
    DEL_ITEM_FROM_DONE = 'DEL_ITEM_FROM_DONE',
    // 清除全部
    CLEARALL = 'CLEARALL',

    // 更新todo的展示标记
    INIT_TODO_FLAGS = 'INIT_TODO_FLAGS',
    UPDATE_TODO_FLAGS = 'UPDATE_TODO_FLAGS',
}

export default TYPES