import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
