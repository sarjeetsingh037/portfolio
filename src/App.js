import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
const router = createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout />,
    children : [
      {
        path:"/",
        element:<HomePage />,
        children: [
          {
            index:true,
            path:'/',
            element:<About />
          }, 
          {
            path:'resume',
            element:<Resume />
          }, 
          {
            path:'portfolio',
            element:<Portfolio />
          },
          {
            path:'achievements',
            element:<Achievements />
          },
          {
            path:'contact',
            element:<Contact />
          }
        ]
      }, 
    ] 
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
