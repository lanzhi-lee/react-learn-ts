import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <ul className='header__navbar'>
                    <li className='header__navbar-item'><NavLink to='/home'>HOME</NavLink></li>
                    <li className='header__navbar-item'><NavLink to='/about'>ABOUT</NavLink></li>
                </ul>
            </header>
        )
    }
}