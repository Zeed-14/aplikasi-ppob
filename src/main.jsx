import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import AppLayout from './components/AppLayout';
import HomePage from './pages/home/HomePage';
import PurchasePage from './pages/pulsa/PurchasePage';
import DataPage from './pages/data/DataPage';
import GamePage from './pages/game/GamePage';
import PlnPage from './pages/pln/PlnPage';
// Perbaiki baris di bawah ini
import EwalletPage from './pages/ewallet/EwalletPage'; 
import BpjsPage from './pages/bpjs/BpjsPage';
import ConfirmationPage from './pages/transaction/ConfirmationPage';
//import SettingsPage from './pages/settings/SettingsPage';
import StatusPage from './pages/transaction/StatusPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'beli/pulsa', element: <PurchasePage /> },
      { path: 'beli/data', element: <DataPage /> },
      { path: 'beli/pln', element: <PlnPage /> },
      { path: 'beli/bpjs', element: <BpjsPage /> },
      { path: 'beli/e-wallet', element: <EwalletPage /> },
      { path: 'beli/game', element: <GamePage /> },
      //{ path: 'pengaturan', element: <SettingsPage /> },
      { path: 'konfirmasi', element: <ConfirmationPage /> },
      { path: 'status', element: <StatusPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);