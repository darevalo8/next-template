import { itemsSiderAndDrawer } from '@/utils/constants/menus_constansts';
import { Drawer, Menu } from 'antd';

type AppDrawerProps = {
  mobile: boolean;
  collapsed: boolean;
  onClose: () => void;
};

const AppDrawer = (props: AppDrawerProps) => {
  return (
    <>
      {props.mobile && (
        <Drawer
          onClose={props.onClose}
          open={props.collapsed}
          placement="left"
          width="60%"
          closable={false}
          styles={{ body: { padding: 0 } }}
        >
          <Menu mode="inline" items={itemsSiderAndDrawer} className="h-full" />
        </Drawer>
      )}
    </>
  );
};
export default AppDrawer;
