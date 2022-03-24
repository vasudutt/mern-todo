import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import ChangePassword from './pages/ChangePassword';
import ChangeUsername from './pages/ChangeUsername';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/username' element={<ChangeUsername />} />
            <Route path='/password' element={<ChangePassword />} />
          </Routes>
        </div>
      </BrowserRouter> 
      <ToastContainer /> 
    </>
  );
}

export default App;
