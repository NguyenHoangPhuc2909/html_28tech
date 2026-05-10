import { Tag, Badge, Table, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

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
          {record.status ? (<>
            <Tooltip title="Đặt ngay đi">
              <Badge color="blue" text="Còn phòng" />
            </Tooltip>
          </>) : (<>
            <Tooltip title="Hẹn lần sau">
              <Badge color="red" text="Hết phòng" />
            </Tooltip>
          </>)}
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
          {record.type ?
            (<>
              <Tooltip title="Phòng VIP chuẩn 5 sao">
                <Tag color={"green-inverse"}>VIP</Tag>
              </Tooltip>
            </>) : (<>
              <Tooltip title="Phòng thường chuẩn 3 sao">
                <Tag color={"purple-inverse"}>Thường</Tag>
              </Tooltip>
            </>)}
        </>
      }
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => {
        console.log(record.type);
        return <>
          <DeleteRoom onReload={onReload} record={record} />
          <EditRoom onReload={onReload} record={record}/>
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