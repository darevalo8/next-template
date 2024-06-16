import {
  AntDesignOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, MenuProps } from 'antd';

type appNavBarProps = {
  mobile: boolean;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const handleMenuClick: MenuProps['onClick'] = e => {
  // message.info('Click on menu item.');
  console.log('click', e);
};
const itemsUserDropDown: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items: itemsUserDropDown,
  onClick: handleMenuClick,
};
const AppNavBar = (props: appNavBarProps) => {
  return (
    <>
      <div className="w-full flex">
        <div className="demo-logo-vertical w-[20%] sm:10%" />
        {props.mobile && (
          <Button
            type="text"
            icon={
              props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
            onClick={() => props.setCollapsed(!props.collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        )}
      </div>
      <div className="w-full flex justify-end m-3 sm:m-1">
        <Dropdown menu={menuProps} placement="bottomLeft" trigger={['click']}>
          <Avatar
            size={{ xs: 40, sm: 32, md: 40, lg: 60, xl: 55, xxl: 55 }}
            icon={<AntDesignOutlined />}
          />
        </Dropdown>
      </div>
    </>
  );
};
export default AppNavBar;
