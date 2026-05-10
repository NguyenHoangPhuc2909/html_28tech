import { useEffect, useState } from "react"
import { getListRoom } from "../../Services/roomServices";
import { Button } from "antd";
import { OrderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import RoomGrid from "./RoomGrid";
import RoomList from "./RoomList";

export default function ListRoom() {
  const [room, setRoom] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const fetchApi = async () => {
    const response = await getListRoom();
    setRoom(response.reverse());
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  }

  console.log(room);

  return (
    <>
      <Button onClick={() => setIsGrid(false)}>
        <OrderedListOutlined />
      </Button>
      <Button onClick={() => setIsGrid(true)}>
        <AppstoreOutlined />
      </Button>
      {isGrid ? (<>
        <RoomGrid rooms={room} />
      </>) : (<>
        <RoomList rooms={room} onReload={handleReload} />
      </>)}
    </>
  )
}