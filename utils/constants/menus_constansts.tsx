import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
export const itemsSiderAndDrawer = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Menu 1',
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: 'd1', label: 'Option 1' },
          { key: 'd2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: 'd3', label: 'Option 3' },
          { key: 'd4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'Menu 2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Menu 3',
  },
];
