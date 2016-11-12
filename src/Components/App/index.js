import React, {Component} from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Home from '../Home'
import RouteTest from '../RouteTest'
import NoMatchTest from '../NoMatchTest'

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1><Link to="/routetest">React Boilerplate</Link></h1>
                    <Match pattern="/" component={Home}/>
                    <Match pattern="/routetest" component={RouteTest} />
                    <Miss component={NoMatchTest} />
                </div>
            </BrowserRouter>
        )
    }
}