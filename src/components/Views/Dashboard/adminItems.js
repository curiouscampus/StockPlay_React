import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";

export const adminListItems = (
  <div>
    <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to={{ pathname: "/manage" }} style={{ textDecoration: "none",color:"#941f33" }}>
        <ListItemText primary="Stock Manage" />
      </Link>
    </ListItem>
  </div>
);
