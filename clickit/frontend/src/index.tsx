import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Root from './Root'
import { store } from './store'
import { Provider } from 'react-redux'
import AuthenticatedMain from './authenticated/Main'
import SignIn from './unauthenticated/Login/signin'
import SignUp from './unauthenticated/Login/signup'
import FindStore from './components/FindStore'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/stores',
        element: <FindStore />,
    },
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <RouterProvider router = {router} />
    </Provider>,
)
