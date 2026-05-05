import { Badge, Card, Col, Row } from "antd";

export default function RoomGrid(props) {
  const { rooms } = props;
  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms.map(item => (
          <Col key={item.id} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Badge.Ribbon text={item.type ? "VIP" : "Thường"} color={item.type ? "red" : "blue"}>
              <Card title={item.roomName}>
                <p>Số giường: <b>{item.quantityBed}</b></p>
                <p>Số người: <b>{item.quantityPeople}</b></p>
                <p>
                  {item.status ?
                    (<Badge status="success" text="Còn phòng"></Badge>)
                    : (<Badge status="error" text="Hết phòng"></Badge>)}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  )
}