import { Space, Input, Row, Col, Button, Checkbox } from "antd";
import { useState } from "react";
export default function BookRoom() {
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit to json-server`, data);
  }

  const handleChangeCheckbox = (e) => {
    const object = {
      ...data,
      services: e
    };
    setData(object);
  }

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    };
    setData(object);
  }

  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col xs={24}>
          <p>Họ tên: </p>
          <Input name="fullname" placeholder="Nguyen Van A" onChange={handleChangeInput} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <p>Số điện thoại: </p>
          <Input name="phone" placeholder="084xxxxxxx" onChange={handleChangeInput} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <p>Email: </p>
          <Input name="email" placeholder="nguyenvana@gmail.com" onChange={handleChangeInput} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <p>Dịch vụ thêm: </p>
          <Checkbox.Group name="services" onChange={handleChangeCheckbox}>
            <Space orientation="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô">Thuê ô tô</Checkbox>
              <Checkbox value="Thuê xe điện">Thuê xe điện</Checkbox>
              <Checkbox value="Thuê xe đạp">Thuê xe đạp</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  )
}