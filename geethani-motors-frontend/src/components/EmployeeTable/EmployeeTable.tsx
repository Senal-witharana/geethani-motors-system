import React from "react";
import { Space, Table, Tag } from "antd";
import Button from "@mui/material/Button";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    phone: "0773444343",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    phone: "0773444343",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    phone: "0773444343",
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const App: React.FC = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Mobile Number" dataIndex="phone" key="phone" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <Button variant="contained" color="success">
            Update {record.lastName}
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Space>
      )}
    />
  </Table>
);

export default App;
