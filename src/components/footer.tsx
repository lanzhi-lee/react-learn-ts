import React, { Component } from 'react'
interface IProps {
    clearAll: () => void
}
export default class Footer extends Component<IProps> {

    clearAll = () => {
        this.props.clearAll()
    }
    render() {
        return (
            <footer>
                <span>Copyright © 2019 lizhan1@xiaomi.com</span>
                {/* eslint-disable-next-line */}
                <span onClick={this.clearAll}><a href="#">clear</a></span>
            </footer>
        )
    }
}