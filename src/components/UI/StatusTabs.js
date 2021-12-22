import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { serverUrl } from "../../constants";
import { GlobalContext } from "../context/Provider";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function StatusTabs() {
  const [portfolio, setPortfolioData] = React.useState(null);

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
      axios
        .get(serverUrl + "/api/stats", {
          headers: {
            Authorization: `Brearer ${data.token}`,
          },
        })
        .then((res) => {
          let portfolio = { totalInvestment: 0, currentValue: 0 };
          Object.keys(res.data.data.quotes).map((item, i) => {
            let stockObj = res.data.data.quotes[item]["price"];
            portfolio.totalInvestment =
              portfolio.totalInvestment + stockObj.user_holdings.TotalPrice;
            portfolio.currentValue =
              portfolio.currentValue +
              stockObj.user_holdings.quantity * stockObj.regularMarketPrice;
          });
          setPortfolioData(portfolio);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (data && quotes === null) {
      fetchData();
    } else {
      let portfolio = { totalInvestment: 0, currentValue: 0 };
      const st = data.user.stats.map((item) => item.key);
      st.map((item) => {
        quotes[item].price.user_holdings = data.user.stats.find(
          (op) => op.key === item
        );
      });
      st.map((item, i) => {
        let stockObj = quotes[item]["price"];
        portfolio.totalInvestment =
          portfolio.totalInvestment + stockObj.user_holdings.TotalPrice;
        portfolio.currentValue =
          portfolio.currentValue +
          stockObj.user_holdings.quantity * stockObj.regularMarketPrice;
      });
      setPortfolioData(portfolio);
    }
    return () => {};
  }, [data, quotes]);
  return (
    <Box
      sx={{
        mb: 1,
        display: "flex",
        height: "fit-content",
      }}
    >
      {portfolio !== null ? (
        <Grid
          spacing={1}
          container
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6} lg={2}>
            <Paper
              sx={{ textAlign: "center", backgroundColor: "primary.dark" }}
            >
              <Typography variant="subtitle2">Total Value</Typography>

              <Typography variant="button" display="block">
                {(+data.user.currentWalletValue + +portfolio.currentValue).toFixed(2) }
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <Paper
              sx={{ textAlign: "center", backgroundColor: "primary.dark" }}
            >
              <Typography variant="subtitle2">Investment</Typography>

              <Typography variant="button" display="block">
                {portfolio.totalInvestment}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <Paper
              sx={{ textAlign: "center", backgroundColor: "primary.dark" }}
            >
              <Typography variant="subtitle2">Funds Available</Typography>

              <Typography variant="button" display="block">
              {data.user.currentWalletValue.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
