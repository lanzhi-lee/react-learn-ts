import React, { useContext } from 'react'
import { Context, TYPES } from '../hooks'
import IContext from '../types/IContext'
interface IProps {
    clearAll: () => void
}

const Footer: React.FC = props => {
    const { dispatchTodolist, dispatchDonelist } = (useContext(Context) as IContext).dispatch

    const clearAll = () => {
        dispatchTodolist({ type: TYPES.CLEARALL, data: {} })
        dispatchDonelist({ type: TYPES.CLEARALL, data: {} })
    }

    return (
        < footer >
            <span>Copyright © 2019 lizhan1@xiaomi.com</span>
            {/* eslint-disable-next-line */}
            <span onClick={clearAll}><a href="#">clear</a></span>
        </footer >
    )
}

export default Footer
