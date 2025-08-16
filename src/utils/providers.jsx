// 1. Tambahkan properti 'color' pada setiap provider
const PROVIDERS = {
  TELKOMSEL: {
    name: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823', '0851'],
    logo: '/assets/logos/telkomsel.png',
    color: 'red'
  },
  INDOSAT: {
    name: 'Indosat',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    logo: '/assets/logos/indosat.png',
    color: 'yellow'
  },
  XL: {
    name: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    logo: '/assets/logos/xl.png',
    color: 'blue'
  },
  AXIS: {
    name: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    logo: '/assets/logos/axis.png',
    color: 'purple'
  },
  SMARTFREN: {
    name: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    logo: '/assets/logos/smartfren.png',
    color: 'red'
  },
  TRI: {
    name: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    logo: '/assets/logos/tri.png',
    color: 'gray'
  }
};

export const detectProvider = (phoneNumber) => {
  // ... (fungsi ini tidak berubah)
  if (!phoneNumber || phoneNumber.length < 4) return null;
  for (const providerKey in PROVIDERS) {
    const provider = PROVIDERS[providerKey];
    const found = provider.prefixes.some(prefix => phoneNumber.startsWith(prefix));
    if (found) return provider;
  }
  return null;
};