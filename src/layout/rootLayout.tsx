import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Meta from '@/components/shared/Meta';
import React from 'react'

export default function RootLayout({ children }: React.ComponentProps<any>) {
  return (
    <>
        <Meta />
        <Header />
        <div>{children}</div>
        <Footer />
    </>
  );
}
