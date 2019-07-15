import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <section className="main-list-container">
                <section className="main-list">
                    <h2>正在进行<span className="listcount">3</span></h2>
                    <ul>
                        <li className="todolist">
                            <input type="checkbox" checked={false} readOnly />
                            <span>吃饭</span>
                            {/* eslint-disable-next-line */}
                            <a href="#">-</a>
                        </li>

                        <li className="todolist">
                            <input type="checkbox" checked={false} readOnly />
                            <span>吃饭</span>
                            {/* eslint-disable-next-line */}
                            <a href="#">-</a>
                        </li>
                    </ul>

                    <h2>已经完成<span className="listcount">5</span></h2>
                    <ul>
                        <li className="donelist">
                            <input type="checkbox" checked readOnly />
                            <span>打代码</span>
                            {/* eslint-disable-next-line */}
                            <a href="#">-</a>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}