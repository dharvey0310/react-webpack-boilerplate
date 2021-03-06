import React from 'react'
import {Match} from 'react-router'

export const MatchWithSubRoutes = (route) => {
    return(
        <Match {...route} render={(props) => (
            <route.component {...props} routes={route.routes} />
    )} />)
}