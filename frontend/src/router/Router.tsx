import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';

export function AppRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    );
  }
  