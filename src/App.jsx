import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataPage from "./pages/DataPage"
import "./App.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <DataPage/>
  }
])

function App() {

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
