//import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage'
import Loginpage from "./components/LoginPage";
import AllVechicle from "./components/AllVechicle";
import AddVechicle from "./components/AddVechicle";

export default function App() {
  return (
    <div>
  
      <BrowserRouter>
      <Routes>
      

      <Route path="/" element={<Loginpage />} />
      <Route path="/home" element={<AllVechicle/>}/>
      <Route path="/add" element={<AddVechicle/>}/>



     </Routes>
     </BrowserRouter>
    </div>
  )
}
