import React from 'react'
import Footer from '../components/footer'
import { Context } from '../hooks'

interface IProps {
    clearAll: () => void
}

const warpFooter = (WrappedComponent: React.FC<IProps>) => {
    class newComponent extends React.Component {
        static contextType = Context

        render() {
            let { clearAll } = this.context.actions
            return <WrappedComponent {...{ clearAll }} />
        }
    }
    return newComponent
}

export default warpFooter(Footer)