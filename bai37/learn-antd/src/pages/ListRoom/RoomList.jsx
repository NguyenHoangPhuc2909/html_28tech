import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

export default function RoomList(props) {
  const { rooms, onReload } = props;
  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "roomName",
      key: "roomName"
    },
    {
      title: "Số giường",
      dataIndex: "quantityBed",
      key: "quantityBed"
    },
    {
      title: "Số người",
      dataIndex: "quantityPeople",
      key: "quantityPeople"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        console.log(record.status);
        return <>
          {record.status ? (<Badge color="blue" text="Còn phòng" />) : (<Badge color="red" text="Hết phòng" />)}
        </>
      }
    },
    {
      title: "Loại phòng",
      dataIndex: "type",
      key: "type",
      render: (_, record) => {
        console.log(record.type);
        return <>
          {record.type ? (<Badge color="green" text="VIP" />) : (<Badge color="purple" text="Thường" />)}
        </>
      }
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => {
        console.log(record.type);
        return <>
          <DeleteRoom onReload={onReload} record={record}/>
        </>
      }
    }
  ]
  return (
    <>
      <Table rowKey={"id"} dataSource={rooms} columns={columns}></Table>
    </>
  )
}