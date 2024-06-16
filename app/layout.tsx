import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next And Ant desing',
  description: 'Create by Daniel Arevalo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/> */}
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <StoreProvider>{children}</StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
{
  /* <ConfigProvider
            theme={{
              token:{
                colorPrimary: "#722ed1",
                colorInfo: "#722ed1"
                
              }
            }}
          >

          {children}
          </ConfigProvider> */
}
