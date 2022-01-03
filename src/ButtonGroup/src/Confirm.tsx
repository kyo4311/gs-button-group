import React, { FC, useRef } from 'react';
import { Button, Modal, ModalProps, Typography } from 'antd';
import { ModalFunc } from 'antd/lib/modal/confirm';

type ConfirmProps = Pick<ModalProps, 'okText' | 'title' | 'cancelText' | 'onOk'>;

interface Props extends ConfirmProps {
  name?: string;
  disabled?: boolean;
  onConfirm: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
}

const ButtonLink: FC<Props> = (props) => {
  const {
    children,
    disabled,
    okText = '确认',
    cancelText = '取消',
    onConfirm,
    onOk,
    ...restProps
  } = props;

  const modelInstance = useRef<ReturnType<ModalFunc>>();

  const onCancel = () => {
    modelInstance.current?.destroy();
  };

  const onClick = () => {
    modelInstance.current = Modal.confirm({
      mask: false,
      okText,
      cancelText,
      onCancel,
      onOk: onOk || onConfirm,
      ...restProps,
    });
  };

  return <Typography.Link onClick={onClick} disabled={disabled} children={children} />;
};

export default ButtonLink;
