import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartTooltip,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import { COLORS } from "./constants";

// Graph data
const series = [
  {
 status: "easy1",
 data: [43,30,59,29,40,18,49,20,68,94,38,26],
 color: COLORS.first,
  },
  {
 status: "eazy2",
 data: [25,15,30,39,69,20,12,74,94,94,2,3],
 color: COLORS.second,
  }
];

const categories = ["1-st", "2-nd", "3-rd","4-th", "5-th", "6-th","7-th", "8-th", "9-th","10-th", "11-th", "12-th"];

const renderTooltip = context => {
  const {value} = context.point || context;
  return (
    <div>
      {value} tasks passed
    </div>
  );
};

const seriesLabels = {
  visible: false,
  padding: 3,
  font: "normal 16px Arial, sans-serif",
  position: "center",
};

const Bar = props => {
  return (
 <Chart>
 <ChartTitle text="Poductivity" />
 <ChartLegend visible={false} />
 <ChartTooltip render={renderTooltip} />
 <ChartCategoryAxis>
 <ChartCategoryAxisItem categories={categories}>
 <ChartCategoryAxisTitle text="Количество выполненных заданий с течением времени" />
 </ChartCategoryAxisItem>
 </ChartCategoryAxis>
 <ChartSeries>
 {series.map((item, idx) => (
 <ChartSeriesItem
 key={idx}
 type="column"
 gap={1}
 spacing={0.05}
 labels={seriesLabels}
 data={item.data}
 name={item.status}
 color={item.color}
 />
 ))}
 </ChartSeries>
 </Chart>
  );
};

export default Bar;