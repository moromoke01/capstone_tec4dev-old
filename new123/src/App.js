import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import './Components/Nav/Navbar'
import Result from './Components/Result';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/Home'
import Quiz from './Components/quiz/quiz';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import TestMainPage from './Components/quiz/psychometricTest/TestMainPage';
// import CognitiveQue from './Components/quiz/psychometricTest/CognitiveQue';
import PersonalityTrait from './Components/quiz/psychometricTest/PersonalityTrait';
// import CreativityQue from './Components/quiz/psychometricTest/CreativityQue';
// import Aptitude from './Components/quiz/psychometricTest/AptitudeQue';
// import SkillQue from './Components/quiz/psychometricTest/SkillQue';

function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Navbar/>,
    element: <Home/>
  },
  {
    path: '/result',
    element: <Result/>
  },
  {
    path:'/quiz',
    
    element: <Quiz/>
  },
  {
    path:'/signup',
    element: <Signup/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/TestMainPage',
    element: <TestMainPage/>
  },
  // {
  //   path:'/CognitiveQue',
  //   element: <CognitiveQue/>
  // },
  {
    path:'/PersonalityTrait',
    element: <PersonalityTrait/>
  },
  // {
  //   path:'/Aptitude',
  //   element: <Aptitude/>
  // },
  // {
  //   path:'/CreativityQue',
  //   element: <CreativityQue/>
  // },{
  //   path:'/SkillQue',
  //   element: <SkillQue/>
  // }
  
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;