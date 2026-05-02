import { useEffect, useState } from "react"
import { getListRoom } from "../../Services/roomServices";

export default function ListRoom() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListRoom();
      setRoom(response);
    }
    fetchApi();
  }, []);

  console.log(room);

  return (
    <>

    </>
  )
}