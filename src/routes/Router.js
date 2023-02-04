import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route } from 'react-router-dom';
import Increase from '../pages/Increase';
import Todos from '../pages/Todos';

const Router = () => {
    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<Increase />}></Route>
                <Route path='todos' element={<Todos />}></Route>
            </Route>
        )
    )
    return route;

}

const Root = () => {
    return <>
        <div>
            <Link to='/'>Increase</Link> |
            <Link to='/todos'>Todos</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </>
}


export default Router;