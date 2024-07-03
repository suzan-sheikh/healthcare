import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <h2>This is home</h2>,
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: '/',
          element: <h2>Home</h2>,
        },
        {
          path: "/login",
          element: <h2>Login page</h2>,
        },        
      ],
    },
  ]);

export default router;