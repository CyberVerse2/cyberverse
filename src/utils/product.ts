import snapLogo from '../assets/snap/logo.svg';
import snapBanner from '../assets/snap/banner.png';

import predoLogo from '../assets/predo/logo.svg';
import predoBanner from '../assets/predo/banner.png';

export type Product = {
  name: string;
  tagline: string;
  description: string;
  logo: string; // path to logo asset
  banner: string; // path to banner/hero image
  url: string;
  twitter: string
};

export const products: Product[] = [
  {
    name: 'Snap',
    tagline: 'Make something beautiful every day ✴︎',
    description: 'Turn any image into stunning styles, from Ghibli to Minecraft and beyond.',
    logo: snapLogo,
    banner: snapBanner,
    url: 'https://farcaster.xyz/miniapps/pWHtnHreyj_t/snap',
    twitter: 'https://x.com/usesnap'
  },
  {
    name: 'Predo',
    tagline: 'Prediction markets reimagined for conversations.',
    description:
      'Create and settle predictions instantly inside your favourite telegram group. Powered by AI and Solana.',
    logo: predoLogo,
    banner: predoBanner,
    url: 'https://predo.fun',
    twitter: 'https://x.com/predofun'
  }
];
