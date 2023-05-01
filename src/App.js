import { BarChart } from "./components/BarChart";
import { StackedBarChart } from "./components/StackedBarChart";

const BAR_CHART_DATA = [
  { label: "Apples", value: 100 },
  { label: "Bananas", value: 200 },
  { label: "Oranges", value: 50 },
  { label: "Kiwis", value: 150 },
];

const GROUPED_BAR_CHART_DATA = [
  { label: "Apples", values: [60, 80, 100] },
  { label: "Bananas", values: [160, 200, 120] },
  { label: "Oranges", values: [60, 40, 10] },
];

const App = () => {
  return (
    <div>
      <BarChart data={BAR_CHART_DATA} />
      <StackedBarChart data={GROUPED_BAR_CHART_DATA} />
    </div>
  );
};

export default App;
