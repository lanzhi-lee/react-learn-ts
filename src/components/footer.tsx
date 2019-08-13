import React from 'react'
interface IProps {
    clearAll: () => void
}

const Footer: React.FC<IProps> = props => {
    const clearAll = () => { props.clearAll() }

    return (
        < footer >
            <span>Copyright © 2019 lizhan1@xiaomi.com</span>
            {/* eslint-disable-next-line */}
            <span onClick={clearAll}><a href="#">clear</a></span>
        </footer >
    )
}

export default Footer
