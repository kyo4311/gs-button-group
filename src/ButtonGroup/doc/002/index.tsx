import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import 'antd/dist/antd.css';
import { ButtonGroup } from '../../../index';

interface DataItem {
  id: number;
  age: number;
}

const Demo001: React.FC<{}> = () => {
  const dataSource: DataItem[] = [
    {
      id: 1,
      age: 17,
    },
    {
      id: 2,
      age: 27,
    },
    {
      id: 3,
      age: 37,
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
          <ButtonGroup split={true}>
            <ButtonGroup.Link disabled to="/">
              详情
            </ButtonGroup.Link>
            <ButtonGroup.Popconfirm title="确认删除？" onConfirm={onConfirm}>
              删除
            </ButtonGroup.Popconfirm>
            <ButtonGroup.Confirm title="确认删除？" onConfirm={onConfirm}>
              删除
            </ButtonGroup.Confirm>
            <ButtonGroup.A target="_blank" href="/home">
              帮助
            </ButtonGroup.A>
            <ButtonGroup.A onClick={onUp}>上架</ButtonGroup.A>
            <ButtonGroup.A onClick={onDown}>下架</ButtonGroup.A>
          </ButtonGroup>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={dataSource} columns={columns} />;
};

export default Demo001;
