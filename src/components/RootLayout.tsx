import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-full overflow-x-hidden px-6 md:px-25">{children}</div>;
}
