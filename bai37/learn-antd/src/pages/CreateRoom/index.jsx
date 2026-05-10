import { Row, Col, Switch, Select, Form, Input, Button, InputNumber, message } from "antd";
import { createRoom } from "../../Services/roomServices";
import { Option } from "antd/es/mentions";

export default function CreateRoom() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (e) => {
    const response = await createRoom(e);
    console.log(response);
    if (response) {
      form.resetFields();
      messageApi.open({
        type: `success`,
        content: `Tạo phòng mới thành công`,
        duration: 3
      });
    }
    else {
      messageApi.open({
        type: `error`,
        content: `Tạo phòng mới không thành công`
      });
    }
  }

  return (
    <>
      {contextHolder}
      <h2>Thêm phòng mới</h2>
      <Form form={form} className="create__room" onFinish={handleFinish} layout="vertical">
        <Row gutter={16}>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label="Tên phòng"
              name="roomName"
              rules={[{ required: true, message: 'Vui lòng nhập tên phòng!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label="Số lượng giường"
              name="quantityBed"
              rules={[{ required: true, message: 'Vui lòng nhập số lượng giường!' }]}
            >
              <InputNumber min={1} style={{ 'width': '100%' }} />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label="Số người tối đa"
              name="quantityPeople"
              rules={[{ required: true, message: 'Vui lòng nhập số người tối đa!' }]}
            >
              <InputNumber min={1} style={{ 'width': '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24}>
            <Form.Item
              label="Mô tả"
              name="description"
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
            <Form.Item
              name="utils"
              label="Tiện ích"
              initialValue={['Wifi']}
            >
              <Select
                placeholder="Vui lòng chọn tiện ích"
                mode="multiple"
                allowClear
              >
                <Option value="Wifi">Wifi</Option>
                <Option value="Nóng lạnh">Nóng lạnh</Option>
                <Option value="Điều hoà">Điều hoà</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item initialValue={true} valuePropName="checked" name="status" label="Trạng thái">
              <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item initialValue={true} valuePropName="checked" name="type" label="Loại phòng">
              <Switch checkedChildren="Phòng VIP" unCheckedChildren="Phòng thường" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label={null} >
              <Button type="primary" htmlType="submit">
                Tạo mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}