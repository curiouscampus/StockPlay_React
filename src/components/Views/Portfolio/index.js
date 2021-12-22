import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";
import DataGridDemo from "../../UI/Transactions";

import { GlobalContext } from "../../context/Provider";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Deposits from "./Wallet";
import Chart from "./chart";
import StatusTabs from "../../UI/StatusTabs";
import { serverUrl } from "../../../constants";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const column = [
  {
    field: "symbol",
    headerName: "Symbol",
    width: 130,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 100,
  },
  {
    field: "price",
    headerName: "Buy Price",
    type: "number",
    width: 110,
  },
  {
    field: "currentPrice",
    headerName: "Current Price",
    type: "number",
    width: 140,
  },
  {
    field: "netReturns",
    headerName: "Net Returns",
    type: "number",
    width: 130,
  },
  {
    field: "profit",
    headerName: "Profit",
    width: 100,
  },
];

export default function SimplePaper() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [holdings, setHoldings] = React.useState(null);
  const [portfolioData, setPortfolioData] = React.useState(null);

  const {
    stocksState: {
      stocks: { quotes },
    },
    authState: {
      auth: { data },
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(serverUrl + "/api/stats", {
          headers: {
            Authorization: `Brearer ${data.token}`,
          },
        })
        .then((res) => {
          let holdings = [];
          let portfolio = { totalInvestment: 0, currentValue: 0 };
          let response = Object.keys(res.data.data.quotes).map((item, i) => {
            let stockObj = res.data.data.quotes[item]["price"];
            holdings.push({ item, quantity: stockObj.user_holdings.quantity });
            portfolio.totalInvestment =
              portfolio.totalInvestment + stockObj.user_holdings.TotalPrice;
            portfolio.currentValue =
              portfolio.currentValue +
              stockObj.user_holdings.quantity * stockObj.regularMarketPrice;
            return {
              id: i + 1,
              symbol: stockObj.symbol,
              currentPrice: stockObj.regularMarketPrice,
              quantity: stockObj.user_holdings.quantity,
              price: (
                stockObj.user_holdings.TotalPrice /
                stockObj.user_holdings.quantity
              ).toFixed(3),
              netReturns:
                stockObj.regularMarketPrice -
                stockObj.user_holdings.TotalPrice /
                  stockObj.user_holdings.quantity,
              profit:
                (
                  ((stockObj.regularMarketPrice -
                    stockObj.user_holdings.TotalPrice /
                      stockObj.user_holdings.quantity) /
                    (stockObj.user_holdings.TotalPrice /
                      stockObj.user_holdings.quantity)) *
                  100
                ).toFixed(3) + "%",
            };
          });
          setPortfolioData(portfolio);
          setHoldings(holdings);
          setList(response);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);

          console.log(err);
        });
    };
    if (data && quotes === null) {
      fetchData();
    } else {
      setLoading(true);
      let holdings = [];
      let portfolio = { totalInvestment: 0, currentValue: 0 };
      const st = data.user.stats.map((item) => item.key);
      st.map((item) => {
        quotes[item].price.user_holdings = data.user.stats.find(
          (op) => op.key === item
        );
      });
      let response = st.map((item, i) => {
        let stockObj = quotes[item]["price"];
        holdings.push({ item, quantity: stockObj.user_holdings.quantity });
        portfolio.totalInvestment =
          portfolio.totalInvestment + stockObj.user_holdings.TotalPrice;
        portfolio.currentValue =
          portfolio.currentValue +
          stockObj.user_holdings.quantity * stockObj.regularMarketPrice;
        return {
          id: i + 1,
          symbol: stockObj.symbol,
          currentPrice: stockObj.regularMarketPrice,
          quantity: stockObj.user_holdings.quantity,
          price: (
            stockObj.user_holdings.TotalPrice / stockObj.user_holdings.quantity
          ).toFixed(3),
          netReturns:
            stockObj.regularMarketPrice -
            stockObj.user_holdings.TotalPrice / stockObj.user_holdings.quantity,
          profit:
            (
              ((stockObj.regularMarketPrice -
                stockObj.user_holdings.TotalPrice /
                  stockObj.user_holdings.quantity) /
                (stockObj.user_holdings.TotalPrice /
                  stockObj.user_holdings.quantity)) *
              100
            ).toFixed(3) + "%",
        };
      });
      setPortfolioData(portfolio);
      setHoldings(holdings);
      setList(response);
      setLoading(false);
    }
    return () => {};
  }, [data, quotes]);

  const renderLabel = (entry) => {
    return entry.name + " | " + entry.value;
  };

  const data02 = [
    {
      fill: "#111D5E",
      name: "TSLA",
      value: 400,
    },
    {
      fill: "#ECEFA4",
      name: "Remains",
      value: 200,
    },
    {
      fill: "#2B4F60",
      name: "GOOG",
      value: 300,
    },
    {
      fill: "#111D5E",
      name: "AAP",
      value: 300,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        mt: 2,
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
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
        <Box sx={{ flexGrow: 1, mb: 5, ml: 5, mr: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ mb: "5px", fontWeight: "bold" }}
                >
                  Status
                </Typography>
                {!loading && portfolioData ? (
                  <Deposits portfolioData={portfolioData} />
                ) : (
                  <CircularProgress />
                )}
                <Divider sx={{ mt: 3, width: "100%", mb: 3 }} />
                {!loading ? (
                  <Chart
                    renderLabel={renderLabel}
                    data02={data02}
                    holdings={holdings}
                  />
                ) : (
                  <CircularProgress />
                )}
              </Item>
            </Grid>
            <Grid item xs={12} md={8}>
            <StatusTabs />{" "}

              <Typography
                variant="h5"
                color="primary"
                sx={{ mb: "5px", fontWeight: "bold" }}
              >
                Porfolio
              </Typography>
              {loading ? (
                <CircularProgress />
              ) : (
                <DataGridDemo
                  count={8}
                  columns={column}
                  demodata={list}
                  height={500}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
