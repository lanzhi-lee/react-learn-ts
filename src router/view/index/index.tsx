import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
interface IProps {

}

interface IState {
    todolist: Array<string>,
    donelist: Array<string>,
}

export default class Home extends React.Component<IProps, IState> {
    public state: IState = { todolist: [], donelist: [] }

    render() {
        return (
            <div className="index">
                <Header />
                
                <main>
                    <h2 style={{ textAlign: 'center', margin: '30px' }}>多级路由跳转Demo</h2>
                    <section className='index__main'>
                        <section className='index__main-left'>
                            <ul>
                                <li><NavLink to='/home/eat'>吃饭</NavLink></li>
                                <li><NavLink to='/home/sleep'>睡觉</NavLink></li>
                            </ul>
                        </section>

                        <section className='index__main-right'>
                            <Switch>
                                <Route path='/home/eat' component={Eat}></Route>
                                <Route path='/home/sleep' component={Sleep}></Route>
                                <Redirect to='/home/eat' ></Redirect>
                            </Switch>
                        </section>
                    </section>

                </main>
                <Footer />
            </div>
        );
    }

}

let Eat = () => <div>吃饭</div>
let Sleep = () => (
    <>
        <h3>在哪儿睡？</h3>
        <section className='index__main-right-top'>
            <ul>
                <li><NavLink to='/home/sleep/bed'>床上睡</NavLink></li>
                <li><NavLink to='/home/sleep/sofa'>沙发上睡</NavLink></li>
            </ul>
        </section>
        <section className='index__main-right-bottom'>
            <Switch>
                <Route path='/home/sleep/bed' component={Bed}></Route>
                <Route path='/home/sleep/sofa' component={Sofa}></Route>
                <Redirect to='/home/sleep/bed' ></Redirect>
            </Switch>
        </section>

        <h3>睡到几点？</h3>
        <section style={{ marginTop: '20px' }}>
            <Route path={`/home/sleep/bed/:time`} component={Time}></Route>
        </section>
    </>
)

let Bed = () => <div>床上睡</div>
let Sofa = () => <div>沙发上睡</div>

let Time = (props: { match: { params: { time: number; }; }; }) => {
    const time = props.match.params.time
    // console.log(props)
    return (
        <div>{`睡到${time}点`}</div>
    )
}