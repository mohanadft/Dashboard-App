import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(React.createElement(App))
