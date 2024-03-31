
import "./App.css";
import './index.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home/Home';
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ authUser?<Home></Home>: <Navigate to='/login'/>} />
        <Route path="/login" element={authUser?<Navigate to='/' />:<Login></Login>} />
        <Route path="/signup" element={authUser?<Navigate to='/' />:<Signup></Signup>} />
      </Routes>
      <Toaster></Toaster>
      
    </div>
    </>
  );
}

export default App;
