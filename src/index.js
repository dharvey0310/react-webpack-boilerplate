import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './Components/App'
import './Styles/global.scss'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))