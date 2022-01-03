import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Typography, TypographyProps } from 'antd';

interface Props extends LinkProps {
  disabled?: boolean;
}

const ButtonLink: FC<Props> = (props) => {
  const { disabled, children, shrinkOnVisibleChange, onClick, ...otherProps } = props;

  const handOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    shrinkOnVisibleChange(false);
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  if (disabled) {
    return <Typography.Link disabled children={children} />;
  }

  return <Link children={children} onClick={handOnClick} {...otherProps} />;
};

export default ButtonLink;
