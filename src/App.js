import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Login from './Components/Login';
import Browse from './Components/Browse';

function App() {
  const approuter = createBrowserRouter([
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>
      }
  ])


  return (
    <div className="">
      <RouterProvider router={approuter}/>
    </div>
  );
}

export default App;
