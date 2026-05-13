import './App.css';
import BasicArea from './components/BasicArea';
import BasicBar from './components/BasicBar';
import BasicColumn from './components/BasicColumn';
import BasicLine from './components/BasicLine';
import GroupBar from './components/GroupBar';
import GroupColumn from './components/GroupColumn';
import MultiLine from './components/MultiLine';
import PieChart from './components/PieChart';
import StackedArea from './components/StackedArea';
import StackedBar from './components/StackedBar';
import StackedColumn from './components/StackedColumn';
import StepLine from './components/StepLine';

function App() {
  return (
    <>
      <BasicLine />
      <MultiLine />
      <StepLine />
      <BasicArea />
      <StackedArea/>
      <BasicColumn/>
      <StackedColumn/>
      <GroupColumn/>
      <BasicBar/>
      <StackedBar/>
      <GroupBar/>
      <PieChart/>
    </>
  );
}

export default App;
