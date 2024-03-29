
import "./App.css";
import './index.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home/Home';


function App() {
  return (
    <>
    
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ <Home></Home>} />
        <Route path="/login" element={ <Login></Login>} />
        <Route path="/signup" element={ <Signup></Signup>} />
      </Routes>
      <Toaster></Toaster>
      
    </div>
    </>
  );
}

export default App;
