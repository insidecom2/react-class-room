import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import Template from '../layout/Template';
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
        <Template>
            <Outlet />
        </Template>
        {/* <div>
            <Link to='/'>Increase</Link> |
            <Link to='/todos'>Todos</Link>
        </div>
        <div>
        </div> */}
    </>
}


export default Router;