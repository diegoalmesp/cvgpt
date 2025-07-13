import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/chat',
          element: <Chat />,
        },
      ])}
    />
  );
};

export default App;
