import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="container px-25 min-w-full">{children}</div>;
}
