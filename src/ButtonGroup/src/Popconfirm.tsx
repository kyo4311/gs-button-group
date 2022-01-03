import React, { FC } from 'react';
import { Popconfirm, PopconfirmProps, Typography } from 'antd';

const ButtonLink: FC<PopconfirmProps> = (props) => {
  const { children, disabled, shrinkOnVisibleChange, onCancel, onConfirm, ...restProps } = props;

  const handOnConfirm = () => {
    shrinkOnVisibleChange(false);
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  const handOnCancel = () => {
    shrinkOnVisibleChange(false);
    if (typeof onCancel === 'function') {
      onCancel();
    }
  };

  return (
    <Popconfirm
      okText="确认"
      cancelText="取消"
      onCancel={handOnCancel}
      onConfirm={handOnConfirm}
      {...restProps}
    >
      <Typography.Link disabled={disabled} children={children} />
    </Popconfirm>
  );
};

export default ButtonLink;
