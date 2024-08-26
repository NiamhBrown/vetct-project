import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataPage from './pages/DataPage';
import ViewCasePage from './pages/ViewCasePage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DataPage />,
  },
  {
    path: '/case/:id',
    element: <ViewCasePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
