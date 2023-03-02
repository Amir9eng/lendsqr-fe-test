import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/users/Users';
import UserDetails from './pages/users/UserDetails';
import Dashboard from './layout/Dashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Users />} />
          <Route index path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>

        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}
export default App;
