import { useState } from 'react'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
