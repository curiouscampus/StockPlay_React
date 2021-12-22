import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData("00:00", 0),
//   createData("03:00", 300),
//   createData("06:00", 600),
//   createData("09:00", 800),
//   createData("12:00", 1500),
//   createData("15:00", 2000),
//   createData("18:00", 2400),
//   createData("21:00", 2400),
//   createData("24:00", undefined),
// ];

export default function Chart({ chartData }) {
  const theme = useTheme();

  const data = chartData.map((item) => {
    return { time: item.date.slice(0, 10), amount: item.open };
  });

  const CustomTooltip = ({ label, payload }) => {
    if (label && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">Amount on</p>
          <p className="intro">
            {payload[0].payload.time}:--:{payload[0].payload.amount}
          </p>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
          }}
        >
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            {/* <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label> */}
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
