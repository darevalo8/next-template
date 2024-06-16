'use client';
import { itemsSiderAndDrawer } from '@/utils/constants/menus_constansts';
import { Layout, Menu, theme } from 'antd';
import { ReactNode, useState } from 'react';

import AppDrawer from './AppDrawer';
import AppNavBar from './AppNavBar';

type ConfigLayoutProps = {
  children: ReactNode;
};
const { Header, Sider, Content, Footer } = Layout;

const ConfigLayout = (props: ConfigLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout },
  } = theme.useToken();
  const onClose = () => {
    setCollapsed(false);
  };
  return (
    <Layout className="h-[100dvh]">
      <AppDrawer onClose={onClose} collapsed={collapsed} mobile={mobile} />
      <Header
        style={{ background: colorBgLayout, padding: 0 }}
        className="navbar"
      >
        <AppNavBar
          mobile={mobile}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </Header>

      <Layout>
        <Sider
          style={{ background: colorBgLayout }}
          breakpoint="lg"
          onBreakpoint={broken => {
            setMobile(broken);
          }}
          className="hideOnMobile"
        >
          <Menu
            mode="inline"
            items={itemsSiderAndDrawer}
            style={{ background: colorBgLayout }}
            className="h-full"
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </Content>
          <Footer>
            easyPro ©{new Date().getFullYear()} Created by EasyPro
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default ConfigLayout;
