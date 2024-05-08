import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <Root />
    </Provider>,
)
