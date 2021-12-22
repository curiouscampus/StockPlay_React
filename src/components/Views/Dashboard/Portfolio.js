import * as React from "react";
import Link from "@mui/material/Link";
import { Divider, Typography } from "@mui/material";
import PortfolioItems from './PortfolioItems'
function preventDefault(event) {
  event.preventDefault();
}

export default function Portfolio() {
  return (
    <React.Fragment>
      <Typography variant="h6">Your Portfolio</Typography>
      <PortfolioItems/>
    </React.Fragment>
  );
}
