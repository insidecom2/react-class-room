import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

function App() {
  const router = Router();
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
