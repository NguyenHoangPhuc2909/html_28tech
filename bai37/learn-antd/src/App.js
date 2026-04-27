import { Typography } from "antd";
import LearnButton from './components/LearnButton';
import LearnGrid from "./components/LearnGrid";
import AllRoutes from "./components/AllRoutes";
const { Title, Text } = Typography;

function App() {
  return (
    <>
      <LearnButton/>
      <Title level={3}>h3. Ant Design</Title>
      <Text code>Ant Design (code)</Text>
      <LearnGrid/>
      <AllRoutes/>
    </>
  );
}

export default App;
