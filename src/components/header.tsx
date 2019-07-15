import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <section className="header-form">
                    <form>
                        <label>TodoList</label>
                        <input type="text" />
                    </form>
                </section>
            </header>
        )
    }
}