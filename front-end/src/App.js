import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import LayoutAdmin from './components/layout/admin/LayoutAdmin';
import ClientCreatePage from './pages/client/ClientCreatePage';
import DeviceCreatePage from './pages/device/DeviceCreatePage';
import AllClientsPage from './pages/client/AllClientsPage';
import AllDevicesPage from './pages/device/AllDevicesPage';
import AllDevicesClient from './pages/device/AllDevicesClient';
import ProtectedRoute from './components/ProtectedRoute';
import CreateClientDevice from './pages/admin/CreateClientDevice';
import ClientPage from './pages/client/ClientPage';
import LayoutClient from './components/layout/admin/LayoutClient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/login" element={<Layout><LoginPage /></Layout>} />

      <Route path="/admin" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><AdminPage /></LayoutAdmin></ProtectedRoute>} />
      <Route path="/admin/create-client" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><ClientCreatePage /></LayoutAdmin></ProtectedRoute>} />
      <Route path="/admin/create-device" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><DeviceCreatePage /></LayoutAdmin></ProtectedRoute>} />
      <Route path="/admin/clients" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><AllClientsPage /></LayoutAdmin></ProtectedRoute>} />
      <Route path="/admin/devices" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><AllDevicesPage /></LayoutAdmin></ProtectedRoute>} />
      <Route path="/admin/user-device" element={<ProtectedRoute role="ADMIN"><LayoutAdmin><CreateClientDevice /></LayoutAdmin></ProtectedRoute>} />

      <Route path="/client" element={<ProtectedRoute role="CLIENT"><LayoutClient><ClientPage /></LayoutClient></ProtectedRoute>} />
      <Route path="/client/devices" element={<ProtectedRoute role="CLIENT"><LayoutClient><AllDevicesClient /></LayoutClient></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default App;
