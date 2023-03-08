import { atom } from 'recoil';
import { NFT } from 'types';

const storeCurrentNft = atom<NFT>({
  key: 'storeCurrentNft',
  default: null,
});

const storeAllNfts = atom<NFT[]>({
  key: 'storeAllNfts',
  default: [
    {
      id: 1,
      name: 'Crypto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/1.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/3014',
    },
    {
      id: 2,
      name: 'ArtCrypto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/2.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/3205',
    },
    {
      id: 3,
      name: 'KingCrypto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/3.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/2978',
    },
    {
      id: 4,
      name: 'Artist',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/4.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/2981',
    },
    {
      id: 5,
      name: 'Flying Cat',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/5.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/2932',
    },
    {
      id: 6,
      name: 'Dream',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/6.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/3205',
    },
    {
      id: 7,
      name: 'Play Go',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/7.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/2168',
    },
    {
      id: 8,
      name: 'Thinking',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fav: 12,
      price: 12,
      unit: 'eth',
      img: '/assets/8.png',
      storeLink: 'https://opensea.io/assets/ethereum/0xe3a87e8264a3cc9a3cc3badc352257867789fdb3/2184',
    },
  ],
});

export { storeAllNfts, storeCurrentNft };
