import { Row, Col, Collapse, Image, Tabs, QRCode, Rate } from "antd";
import "./learngrid.css";
import CartItem from "../CartItem";
import Slide from "./Slide";
const { Panel } = Collapse;
function LearnGrid() {
  const list = [
    {
      id: 1,
      title: "Logo là gì?",
      description: "Logo 1 là ....."
    },
    {
      id: 2,
      title: "Logo là gì?",
      description: "Logo 2 là ....."
    },
    {
      id: 3,
      title: "Logo là gì?",
      description: "Logo 3 là ....."
    }
  ];

  const items = [
    {
      key: 1,
      label: "Tab 1",
      children: <><Slide /></>
    },
    {
      key: 2,
      label: "Tab 2",
      children: `Nội dung của Tab 2`
    },
    {
      key: 3,
      label: "Tab 3",
      children: `Nội dung của Tab 3`
    }
  ]
  return (
    <>
      <Row gutter={[15, 20]}>
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cot 1</div>
        </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cot 2</div>
        </Col>
        <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cot 3</div>
        </Col>
        <Col xxl={10} xl={10} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cot 4</div>
        </Col>
      </Row>

      <Row gutter={[10, 20]} className="mt-20">
        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
          <CartItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
          <CartItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
          <CartItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
          <CartItem title="Box 4" />
        </Col>
      </Row>

      <Row gutter={[10, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem title="Box 5" style={{ height: "300px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 6" style={{ height: "300px" }} />
        </Col>
      </Row>

      <Row gutter={[10, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 7" style={{ height: "300px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem title="Box 8" style={{ height: "300px" }} />
        </Col>
      </Row>

      <Row gutter={[10, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 9" style={{ height: "300px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 10" style={{ height: "300px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 11" style={{ height: "300px" }} />
        </Col>
      </Row>

      <Collapse defaultActiveKey={"1"} accordion>
        {list.map(item => (
          <Panel header={item.title} key={item.id}>
            <p>{item.description}</p>
          </Panel>
        ))}
      </Collapse>

      <Image width={200} src="https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg" preview={true} alt="room" />
      <QRCode errorLevel="M" value="https://ant.design/" icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      <Rate allowClear allowHalf defaultValue={1.5} tooltips={['terrible',
        'bad',
        'normal',
        'good',
        'wonderful']} onChange={(e) =>console.log(e)
        }/>
      <Tabs items={items} />
    </>
  );
}

export default LearnGrid;