import React, {Component} from 'react'
import { Miss, Link } from 'react-router'
import {routes} from '../../Routes'
import { MatchWithSubRoutes } from '../../Routes/MatchWithSubRoutes'
import NoMatchTest from '../NoMatchTest'

export default class App extends Component {
    render() {
        return(
                <div>
                    <h1><Link to="/routetest">React Boilerplate</Link></h1>
                    {routes.map((route, i) => (
                        <MatchWithSubRoutes key={i} {...route} />
                    ))}
                    <Miss component={NoMatchTest} />
                </div>
        )
    }
}