import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoom } from "../../Services/roomServices";

function DeleteRoom(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const response = await deleteRoom(record.id);
    if (response) {
      onReload();
      alert("Xoá phòng thành công");
    }
    else {
      alert("Xoá phòng không thành công");
    }
  }
  return (
    <>
      <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
        <Button size="medium" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  );
}

export default DeleteRoom;