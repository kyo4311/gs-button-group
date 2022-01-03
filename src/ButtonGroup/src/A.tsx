import React from 'react';
import { Typography } from 'antd';
import { LinkProps } from 'antd/lib/typography/Link';

interface Pros extends LinkProps {
  shrinkOnVisibleChange?: (b: boolean) => void;
}

const ButtonA: React.FC<Pros> = (props) => {
  const { shrinkOnVisibleChange, onClick, ...restProps } = props;

  const handOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof shrinkOnVisibleChange === 'function') {
      shrinkOnVisibleChange(false);
    }
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return <Typography.Link onClick={handOnClick} {...restProps} />;
};

export default ButtonA;
