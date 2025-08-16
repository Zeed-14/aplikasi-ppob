import React from 'react';
import { useNavigate } from 'react-router-dom';

// Impor komponen-komponen baru
import BalanceCard from './components/BalanceCard';
import RecentTransactions from './components/RecentTransactions';
import ServicesGrid from './components/ServicesGrid';

// Data & Logika tetap di sini
const menus = [
  { id: 'pulsa', name: 'Pulsa', color: 'blue', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
  { id: 'data', name: 'Paket Data', color: 'sky', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> },
  { id: 'pln', name: 'PLN', color: 'yellow', icon: '/assets/logos/pln.png' },
  { id: 'bpjs', name: 'BPJS', color: 'green', icon: '/assets/logos/bpjs.png' },
  { id: 'e-wallet', name: 'E-Wallet', color: 'indigo', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21z" /></svg> },
  { id: 'game', name: 'Voucher Game', color: 'red', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg> },
  { id: 'pdam', name: 'PDAM', color: 'cyan', icon: '/assets/logos/pdam.png' },
  { id: 'lainnya', name: 'Lainnya', color: 'gray', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> },
];

const dummyRecentTransactions = [
  { type: 'Pulsa', target: '081234567890', menu: menus[0] },
  { type: 'Token Listrik', target: '51234567890', menu: menus[2] },
  { type: 'Paket Data', target: '085712345678', menu: menus[1] },
  { type: 'Tagihan BPJS', target: '0001234567890', menu: menus[3] },
];

const colorMap = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  red: { bg: 'bg-red-100', text: 'text-red-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-600' },
};

const IconRenderer = ({ menu, sizeClass }) => {
  const icon = menu.icon;
  if (typeof icon === 'string') {
    return <img src={icon} alt={menu.name} className="max-w-full max-h-full object-contain p-2" />;
  } else {
    return React.cloneElement(icon, { className: `${sizeClass} ${colorMap[menu.color].text}` });
  }
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuClick = (menuId) => {
    const targetMenu = menus.find(m => m.id === menuId);
    if (targetMenu && ['pulsa', 'data', 'pln', 'bpjs', 'e-wallet', 'game'].includes(targetMenu.id)) {
      navigate(`/beli/${targetMenu.id}`);
    } else {
      alert(`Fitur "${targetMenu.name}" akan segera hadir!`);
    }
  };

  return (
    <div className="space-y-8">
      <BalanceCard userName="Pengguna" balance="123.456" />
      
      <RecentTransactions 
        transactions={dummyRecentTransactions}
        colorMap={colorMap}
        IconRenderer={IconRenderer}
      />
      
      <ServicesGrid
        menus={menus}
        onMenuClick={handleMenuClick}
        colorMap={colorMap}
        IconRenderer={IconRenderer}
      />
    </div>
  );
};

export default HomePage;