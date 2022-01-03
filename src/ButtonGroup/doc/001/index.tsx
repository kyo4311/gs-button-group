import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import 'antd/dist/antd.css';
import { ButtonGroup } from '../../../index';

interface PermissionItem {
  name: string;
  usable: boolean;
}

interface DataItem {
  id: number;
  age: number;
  permission?: PermissionItem[];
}

const Demo001: React.FC<{}> = () => {
  const dataSource: DataItem[] = [
    {
      id: 1,
      age: 17,
      permission: [{ name: 'detail', usable: true }],
    },
    {
      id: 2,
      age: 27,
      permission: [{ name: 'detail', usable: true }],
    },
    {
      id: 3,
      age: 37,
      permission: [{ name: 'detail', usable: true }],
    },
  ];

  const columns: ColumnsType<DataItem> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '操作',
      render: (cur, row) => {
        const onConfirm = () => {
          console.log(row);
        };

        const onUp = () => {};
        const onDown = () => {};

        return (
          <ButtonGroup displayNumber={3}>
            <ButtonGroup.Link disabled={!!(1 + 1)} to="/">
              详情
            </ButtonGroup.Link>
            <ButtonGroup.Link disabled={!!(1 + 1)} to="/">
              编辑
            </ButtonGroup.Link>

            <ButtonGroup.Confirm title="确认删除？" onConfirm={onConfirm}>
              删除
            </ButtonGroup.Confirm>
            <ButtonGroup.A target="_blank" href="/home">
              帮助
            </ButtonGroup.A>
            <ButtonGroup.Popconfirm disabled title="确认上架" onConfirm={onConfirm}>
              上架
            </ButtonGroup.Popconfirm>
            <ButtonGroup.A onClick={onDown}>下架</ButtonGroup.A>
          </ButtonGroup>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={dataSource} columns={columns} />;
};

export default Demo001;
