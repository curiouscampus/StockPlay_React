import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to={{ pathname: "/dashboard" }}>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to={{ pathname: "/profile" }}>
        <ListItemText primary="Profile" />
      </Link>
    </ListItem>
    <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>{" "}
      <Link to={{ pathname: "/portfolio" }}>
        <ListItemText primary="Portfolio" />{" "}
      </Link>
    </ListItem>
    {/* <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to={{ pathname: "/transactions" }}>
        <ListItemText primary="Transactions" />{" "}
      </Link>
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem sx={{ mt: 2, mb: 2, p2: 3, pb: 2 }} button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <Link to={{ pathname: "/about" }} style={{ textDecoration: "none" }}>
        <ListItemText primary="About" />
      </Link>
    </ListItem>
  </div>
);
