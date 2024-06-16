import React from 'react';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

export default function FullPageLayout({ children }: FullPageLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
