import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import './Components/Navbar'
import Result from './Components/Result';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Quiz from './Components/quiz/quiz';
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Navbar/>,
    element: <Home/>,
    errorElement: <div>Not Found</div>
  },
  {
    path: '/result',
    element: <Result/>
  },
  {
    path:'/quiz',
    element: <Quiz/>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
