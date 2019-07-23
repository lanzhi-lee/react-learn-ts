import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Home extends React.Component {
    render() {
        return (
            <div className='about'>
                <Header />
                <main className='main' style={{ textAlign: 'center' }}>ABOUT PAGE</main>
                <Footer />
            </div>
        )
    }
}