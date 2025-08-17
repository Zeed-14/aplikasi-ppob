import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Ganti impor menjadi createHashRouter
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Impor semua komponen halaman seperti biasa
import AppLayout from './components/AppLayout';
import HomePage from './pages/home/HomePage';
import PurchasePage from './pages/pulsa/PurchasePage';
import DataPage from './pages/data/DataPage';
import PlnPage from './pages/pln/PlnPage';
import EwalletPage from './pages/ewallet/EwalletPage';
import BpjsPage from './pages/bpjs/BpjsPage';
import GamePage from './pages/game/GamePage';
import ConfirmationPage from './pages/transaction/ConfirmationPage';
import StatusPage from './pages/transaction/StatusPage';

// 2. Ganti createBrowserRouter menjadi createHashRouter
const router = createHashRouter([
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