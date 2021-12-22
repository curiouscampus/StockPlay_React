import * as React from "react";
import { Divider, Typography } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ portfolioData }) {
  return (
    <React.Fragment>
      <Typography variant="h6">Current Profit</Typography>
      <Typography
        sx={{
          color:
            portfolioData.currentValue - portfolioData.totalInvestment > 0
              ? "#4E9F3D"
              : "#CD1818",
        }}
        component="p"
        variant="h6"
      >
        %{" "}
        {portfolioData
          ? (
              ((portfolioData.currentValue - portfolioData.totalInvestment) /
                portfolioData.totalInvestment) *
              100
            ).toFixed(3)
          : "-"}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6">Total Investment</Typography>
      <Typography color="#7F7C82" variant="h6">
        $ {portfolioData ? portfolioData.totalInvestment.toFixed(4) : "-"}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6">Current Value</Typography>
      <Typography
        sx={{
          color:
            portfolioData.currentValue - portfolioData.totalInvestment > 0
              ? "#4E9F3D"
              : "#CD1818",
        }}
        component="p"
        variant="h6"
      >
        $ {portfolioData ? portfolioData.currentValue.toFixed(4) : "-"}
      </Typography>
    </React.Fragment>
  );
}
