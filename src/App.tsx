import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './layout/Dashboard';
import Login from './pages/Login';
import Users from './pages/users/Users';
import Dashboard from './layout/Dashboard';
import UserDetails from './pages/users/UserDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="*" element={<h2>'Page Not found'</h2>} />
      </Routes>
    </div>
  );
}

export default App;
