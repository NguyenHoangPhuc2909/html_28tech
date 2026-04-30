import { Select, DatePicker, Space, Input, Row, Col, Button, Checkbox, Radio } from "antd";
import { useState } from "react";
import { postBookRoom } from "../../Services/bookRoomServices";
const { RangePicker } = DatePicker;
export default function BookRoom() {
  const [data, setData] = useState({
    time: "14 giờ",
    gifts: "Áo thun"
  });

  const optionTimes = [];
  for (let i = 7; i <= 24; i++) {
    optionTimes.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
      labe: i > 9 ? `${i} giờ` : `0${i} giờ`
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postBookRoom(data);
    if(response){
      alert(`Chúc mừng bạn đã đặt phòng thành công!`);
    }
    else{
      alert(`Hệ thống đang bận. Vui lòng thử lại sau!`);
    }
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

  const handleDate = (dates, dateStrings) => {
    const object = {
      ...data,
      date: dateStrings
    };
    setData(object);
  }

  const handleRadio = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    };
    setData(object);
  }

  const handleChangeSelect = (e) => {
    const object = {
      ...data,
      time: e
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
        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group name="gifts" onChange={handleRadio} defaultValue={data.gifts}>
            <Space>
              <Radio value="Áo thun">Áo thun</Radio>
              <Radio value="Áo sơ mi">Áo sơ mi</Radio>
              <Radio value="Quần tây">Quần tây</Radio>
              <Radio value="Mũ lưỡi trai">Mũ lưỡi trai</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker format={"DD-MM-YYYY"} onChange={handleDate} placeholder={["Nhận phòng", "Trả phòng"]} />
        </Col>

        <Col span={12}>
          <p>Giờ nhận phòng</p>
          <Select onChange={handleChangeSelect} defaultValue={data.time} options={optionTimes} style={{ width: '100px' }} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  )
}