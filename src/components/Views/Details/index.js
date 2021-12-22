import React from "react";
import { Typography, Box, Paper, Grid, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Chart from "../../UI/Chart";
import News from "./News";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DetailList from "./DetailList";
import StatusTabs from "../../UI/StatusTabs";

import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import BasicModal from "../../UI/Modal";
import { serverUrl } from "../../../constants";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  overflow: "auto",
  fontWeight: "bold",
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsLoading: false,
      };
    case "DETAILS_FETCHED":
      return {
        ...state,
        details: action.payload,
        detailsLoading: false,
      };
    case "CHART_DATA_FETCHED":
      return {
        ...state,
        chartData: action.payload,
        chartLoading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  news: [],
  newsLoading: true,
  details: null,
  detailsLoading: true,
  chartData: null,
  chartLoading: true,
  data: null,
  stat: null,
  statLoading: true,
};

export default function Details() {
  const [controls, dispatch] = React.useReducer(reducer, initialState);

  const [searchParams] = useSearchParams();
  const q = searchParams.get("id");
  const {
    authState: {
      auth: { data },
    },
  } = React.useContext(GlobalContext);

  const stat = data.user.stats.filter((item) => item.key === q)[0];

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .post(
          serverUrl + "/api/getNews",
          { stockId: q },
          {
            headers: {
              Authorization: `Brearer ${data.token}`,
            },
          }
        )
        .then((res) => {
          dispatch({
            type: "NEWS_FETCHED",
            payload: res.data.data.news,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (q && data) {
      fetchData();
    }
  }, [q, data]);

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .post(
          serverUrl + "/api/getData",
          { stockId: q },
          {
            headers: {
              Authorization: `Brearer ${data.token}`,
            },
          }
        )
        .then((res) => {
          dispatch({
            type: "DETAILS_FETCHED",
            payload: res.data.data.quotes,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (q && data) {
      fetchData();
    }
  }, [q, data]);

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .post(
          serverUrl + "/api/history",
          { stockId: q },
          {
            headers: {
              Authorization: `Brearer ${data.token}`,
            },
          }
        )
        .then((res) => {
          dispatch({
            type: "CHART_DATA_FETCHED",
            payload: res.data.data.quotes,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (q && data) {
      fetchData();
    }
  }, [q, data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        mt: 2,
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        // backgroundColor: "rgba(148, 31, 51, 0.05)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
        }}
      >
        <Link
          to={{ pathname: "/dashboard" }}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <ArrowBackIcon color="primary" sx={{ m: 2 }} />
            <Typography sx={{ mt: 2 }}>Dashboard</Typography>
          </Box>{" "}
        </Link>
        <Box sx={{ mb: 1, ml: 5, mr: 5 }}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12}>
              <StatusTabs />
            </Grid>
            <Grid item xs={12} md={7} sx={{ mt: 2, height: 260 }}>
              {controls.chartLoading ? (
                <CircularProgress />
              ) : (
                <Chart chartData={controls.chartData} />
              )}
            </Grid>
            <Grid item xs={12} md={4} sx={{ height: 260 }}>
              <Item>
                {"  "}
                {controls.details && controls.details.price.shortName} (
                {controls.details && controls.details.price.symbol})
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  sx={{ ml: 1 }}
                >
                  <BasicModal
                    text={"BUY"}
                    curentPrice={controls.details?.price.regularMarketPrice}
                    stockId={controls.details?.price.symbol}
                    stockName={controls.details?.price.shortName}
                  />
                  <BasicModal
                    text={"SELL"}
                    curentPrice={controls.details?.price.regularMarketPrice}
                    stockId={controls.details?.price.symbol}
                    stockName={controls.details?.price.shortName}
                  />
                </ButtonGroup>
                <Item
                  sx={{
                    p: 1,
                    m: 1,
                    textAlign: "center",
                    height: 140,
                  }}
                >
                  {!stat ? (
                    <Typography variant="subtitle1">
                      You Do not have this share in your portfolio
                    </Typography>
                  ) : (
                    <>
                      {" "}
                      <Typography variant="body2">
                        No. Of Shares in Holding <br /> #{" "}
                        <strong>{stat.quantity}</strong>
                      </Typography>
                      <Divider />
                      <Typography variant="body2">
                        Average Price of share holdings <br />${" "}
                        <strong> {stat.TotalPrice / stat.quantity}</strong>
                      </Typography>
                      <Divider />
                      <Typography variant="body2">
                        Total Price of share holdings <br />${" "}
                        <strong> {stat.TotalPrice}</strong>
                      </Typography>
                    </>
                  )}
                </Item>
              </Item>
            </Grid>
            <Grid item xs={12} md={7} sx={{ m: 1 }}>
              <Item>
                News
                {controls.newsLoading ? (
                  <CircularProgress />
                ) : (
                  <News news={controls.news} />
                )}
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sx={{ m: 1 }}>
              <Item>
                Details
                {controls.detailsLoading ? (
                  <CircularProgress />
                ) : (
                  <DetailList details={controls.details} />
                )}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
