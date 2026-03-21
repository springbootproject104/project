import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./Components/Signin.js"
import Signup from "./Components/Signup.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

export default router;