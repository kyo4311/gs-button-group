import React, { FC } from 'react';
import { Space, Divider } from 'antd';

import Shrink from './Shrink';

interface Props {
  displayNumber?: number;
  split?: boolean;
  hiddenDisabled?: boolean;
}
const Main: FC<Props> = (props) => {
  const { displayNumber = 3, children, split, hiddenDisabled } = props;
  let childrens = React.Children.toArray(children);

  if (hiddenDisabled) {
    childrens = childrens.filter((i: any) => {
      return !i?.props?.disabled;
    });
  }

  const normalDisplayPart = childrens.slice(0, displayNumber);
  const shrinkDisplayPart = childrens.slice(displayNumber, childrens.length);

  const shrink = <Shrink>{shrinkDisplayPart}</Shrink>;

  return (
    <Space split={split ? <Divider type="vertical" /> : null}>
      {normalDisplayPart}
      {shrink}
    </Space>
  );
};

export default Main;
