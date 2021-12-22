import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./ListItems";
import LogoutIcon from "@mui/icons-material/Logout";
import { GlobalContext } from "../../context/Provider";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import logout from "../../context/actions/auth/logout";
import DataGridDemo from "../../UI/Transactions";
import { columns } from "./Column";
import { updateQuotes } from "../../context/actions/stocks/addData";
import { useAlert } from "react-alert";
import { UPDATE_QUOTES } from "../../context/actions/actionTypes";
import StatusTabs from "../../UI/StatusTabs";
import { serverUrl } from "../../../constants";
import { adminListItems } from "./adminItems";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent() {
  const alert = useAlert();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const {
    stocksState: {
      stocks: { quotes, error },
    },
    stocksDispatch,
    authDispatch,
    authState: {
      auth: { data },
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(serverUrl + "/api/getListData", {
          headers: {
            Authorization: `Brearer ${data.token}`,
          },
        })
        .then((res) => {
          stocksDispatch({
            type: UPDATE_QUOTES,
            payload: res.data.data.quotes,
          });
          let response = Object.keys(res.data.data.quotes).map((item, i) => {
            let stockObj = res.data.data.quotes[item]["price"];
            return {
              id: i + 1,
              symbol: stockObj.symbol,
              title: stockObj.shortName,
              currentPrice: stockObj.regularMarketPrice,
              todayHigh: stockObj.regularMarketDayHigh,
              todayLow: stockObj.regularMarketDayLow,
              currencySymbol: stockObj.currencySymbol,
            };
          });
          setList(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (data && quotes === null) {
      fetchData();
    }
    return () => {};
  }, [data, quotes]);

  React.useEffect(() => {
    if (quotes !== null) {
      let response = Object.keys(quotes).map((item, i) => {
        let stockObj = quotes[item]["price"];
        return {
          id: i + 1,
          symbol: stockObj.symbol,
          title: stockObj.shortName,
          currentPrice: stockObj.regularMarketPrice,
          todayHigh: stockObj.regularMarketDayHigh,
          todayLow: stockObj.regularMarketDayLow,
          currencySymbol: stockObj.currencySymbol,
        };
      });
      setList(response);
    }
    if (error !== null) {
      alert.error(error);
    }
  }, [quotes, error]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={() => logout()(authDispatch)}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Typography sx={{ mr: 10, fontWeight: "bold" }}>
            Stock Play
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{adminListItems}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 10, mb: 1 }}>
        <StatusTabs />

          <Grid container spacing={3} justifyContent="center">
            {/* Chart */}
            <Grid item xs={12} md={11} lg={10}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 600,
                }}
              >
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.8,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <DataGridDemo
                    count={8}
                    columns={columns}
                    demodata={list}
                    height={550}
                  />
                )}
                <Box sx={{ mt: 1 }}>
                  {" "}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
