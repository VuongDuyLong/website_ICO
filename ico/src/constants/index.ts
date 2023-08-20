import { IMenu, IPackage, TOKEN } from "@/_types_";

export const packages: IPackage[] = [
  {
    key: 'ETH-01',
    name: 'ETH PACKAGE 01',
    amount: 1000,
    bg: 'eth1.png',
    icon: 'eth.png',
    token: TOKEN.ETH,
  },
  {
    key: 'eth-02',
    name: 'ETH PACKAGE 02',
    amount: 2000,
    bg: 'eth1.png',
    icon: 'eth.png',
    token: TOKEN.ETH,
  },
  {
    key: 'eth-03',
    name: 'ETH PACKAGE 03',
    amount: 3000,
    bg: 'eth1.png',
    icon: 'eth.png',
    token: TOKEN.ETH,
  },
  {
    key: 'usdt-01',
    name: 'USDT PACKAGE 01',
    amount: 1000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-02',
    name: 'USDT PACKAGE 02',
    amount: 2000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-03',
    name: 'USDT PACKAGE 03',
    amount: 3000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  }
]

export const menus: IMenu[] = [
  {name: 'Invest', url: '/'},
  {name: 'Market', url: '/market'},
  {name: 'Auction',url:'/auction'},

]