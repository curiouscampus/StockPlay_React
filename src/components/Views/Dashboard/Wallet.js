import * as React from "react";
import Link from "@mui/material/Link";
import { Divider, Typography } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography variant="h6">Current Profit</Typography>
      <Typography color="#4E9F3D" component="p" variant="h6">
        + 45%
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6">Total Investment</Typography>
      <Typography color="#7F7C82" variant="h6">
        $ 6050.55
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6">Current Value</Typography>
      <Typography color="#4E9F3D" variant="h6">
        $ 8,773.2975
      </Typography>
    </React.Fragment>
  );
}
