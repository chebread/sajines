import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from 'routes/Home';
import NotFoundPage from 'routes/NotFoundPage';
import Viewer from 'routes/Viewer';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}></Route>
        <Route path="i/:id" element={<Viewer />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
