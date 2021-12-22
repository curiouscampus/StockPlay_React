import { Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie } from "recharts";

const data02 = ["#111D5E", "#ECEFA4", "#2B4F60", "#111D5E"];

export default function Chart({ renderLabel, holdings }) {
  let data = [];
  if (holdings) {
    data = holdings.map((item, i) => {
      let color = i % 4;
      return {
        fill: data02[color],
        name: item.item,
        value: item.quantity,
      };
    });
  }

  return (
    <div>
      {holdings ? (
        <PieChart width={730} height={300}>
          <Pie
            style={{ fontSize: 14, fontWeight: "bold" }}
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#fff"
            label={renderLabel}
          />
        </PieChart>
      ) : <Typography>Portfolio Volume is Empty</Typography>}
    </div>
  );
}
