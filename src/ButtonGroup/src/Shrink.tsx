import React, { FC, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';

const More: FC<{}> = (props) => {
  const { children } = props;

  const [visible, setVisible] = useState(false);

  const onVisibleChange = (v: boolean) => {
    setVisible(v);
  };

  const childrenArray = React.Children.toArray(children);

  const menu = (
    <Menu>
      {childrenArray.map((i, index) => {
        console.log(i);

        const addSetVisible = React.cloneElement(i as React.ReactElement, {
          shrinkOnVisibleChange: onVisibleChange,
        });

        return <Menu.Item key={index}>{addSetVisible}</Menu.Item>;
      })}
    </Menu>
  );

  return childrenArray.length ? (
    <Dropdown overlay={menu} visible={visible} onVisibleChange={onVisibleChange}>
      <span style={{ cursor: 'pointer' }}>
        <EllipsisOutlined />
      </span>
    </Dropdown>
  ) : null;
};

export default More;
