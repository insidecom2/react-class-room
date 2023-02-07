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

    </>
}


export default Router;