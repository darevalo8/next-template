import ConfigLayout from '@/layout/layout';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <ConfigLayout>{children}</ConfigLayout>;
}
