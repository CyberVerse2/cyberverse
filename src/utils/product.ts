import predoLogo from '../assets/predo/logo.svg';
import predoBanner from '../assets/predo/banner.png';

import wafflesLogo from '../assets/waffles/logo.svg';
import wafflesBanner from '../assets/waffles/banner.png';

import fofLogo from '../assets/fof/logo.jpg';
import fofBanner from '../assets/fof/banner.jpg';

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
    name: 'Waffles',
    tagline: 'Social game for moments',
    description:
      'Waffles is a social prediction game where players guess popular moments remixed with AI',
    logo: wafflesLogo,
    banner: wafflesBanner,
    url: 'https://farcaster.xyz/miniapps/sbpPNle-R2-V/waffles',
    twitter: 'https://x.com/playwaffles'
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

export const experiments: Product[] = [
  {
    name: 'FOF: Christmas Edition',
    tagline: 'Farcaster Friends Group Photo',
    description: 'A social experiment where users mint a group photo of their farcaster friends.',
    logo: fofLogo,
    banner: fofBanner,
    url: 'https://fof.fun',
    twitter: 'https://x.com/fof'
  }
];
