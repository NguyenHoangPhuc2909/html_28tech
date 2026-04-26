import { Typography } from "antd";
import LearnButton from './components/LearnButton';
import LearnGrid from "./components/LearnGrid";
import LayoutDefault from "./components/LearnLayout/LayoutDefault";
const { Title, Text } = Typography;

function App() {
  return (
    <>
      <LearnButton/>
      <Title level={3}>h3. Ant Design</Title>
      <Text code>Ant Design (code)</Text>
      <LearnGrid/>
      <LayoutDefault/>
    </>
  );
}

export default App;
