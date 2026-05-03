import { Row, Col, Switch, Select, Form, Input, Button, InputNumber } from "antd";
import { createRoom } from "../../Services/roomServices";

export default function CreateRoom() {
  const [form] = Form.useForm();

  const handleFinish = async (e) => {
    const response = await createRoom(e);
    console.log(response);
    if(response){
      form.resetFields();
    }
  }

  return (
    <>
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
            >
              <Select
                placeholder="Vui lòng chọn tiện ích"
                defaultValue={['01']}
                mode="multiple"
                allowClear
                options={[
                  { label: 'Wifi', value: '01' },
                  { label: 'Nóng lạnh', value: '02' },
                  { label: 'Điều hoà', value: '03' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item initialValue={true} valuePropName="checked" name="status" label="Trạng thái">
              <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng"/>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item initialValue={true} valuePropName="checked" name="type" label="Loại phòng">
              <Switch checkedChildren="Phòng VIP" unCheckedChildren="Phòng thường"/>
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