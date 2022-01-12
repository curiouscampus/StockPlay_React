import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";
import DataGridDemo from "../../UI/Transactions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import StatusTabs from "../../UI/StatusTabs";
import { serverUrl } from "../../../constants";
import HexagonIcon from "@mui/icons-material/Hexagon";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const column = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "stockId",
    headerName: "Stock Id",
    width: 120,
  },
  {
    field: "stockName",
    headerName: "StockName",
    width: 120,
  },
  {
    field: "type",
    headerName: "Type",
    width: 80,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 100,
  },
  {
    field: "price",
    headerName: "At Price",
    type: "number",
    width: 110,
  },
  {
    field: "on",
    headerName: "On",
    type: "dateTime",
    width: 130,
  },
];

export default function SimplePaper() {
  const [transaction, setTransaction] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const {
    authState: {
      auth: { data },
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    console.log(data);
    const fetchData = () => {
      setLoading(true);
      axios
        .get(serverUrl + "/api/transactions", {
          headers: {
            Authorization: `Brearer ${data.token}`,
          },
        })
        .then((res) => {
          let response = res.data.data.transactions.map((item, i) => {
            let date = new Date(item.createdAt);
            return {
              id: i + 1,
              stockId: item.stockId,
              stockName: item.stockName,
              type: item.type,
              quantity: item.quantity,
              price: item.price,
              on: date.toLocaleDateString(),
            };
          });
          setTransaction(response);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);

          console.log(err);
        });
    };
    if (data) {
      fetchData();
    }
    return () => {};
  }, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        mt: 2,
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
                <Avatar
                  sx={{
                    height: "6rem",
                    width: "6rem",
                    fontSize: 36,
                    backgroundColor: "rgba(148, 31, 51)",
                  }}
                >
                  {data.user.firstName[0]}
                </Avatar>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  {data.user.firstName + " " + data.user.lastName}
                </Typography>
                <Typography variant="subtitle" sx={{ mt: 1 }}>
                  {data.user.email}
                </Typography>
                <Divider sx={{ mt: 3, width: "100%", mb: 3 }} />
                Current Curious Coins
                <Typography variant="h4" sx={{ mt: 1 }}>
                  CC {data.user.currentWalletValue.toFixed(2)}
                </Typography>
              </Item>
              <Item
                sx={{
                  fontWeight: "bold",
                  display: "inline-flex",
                  width: "95%",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <HexagonIcon sx={{ color: "#35858B", fontSize: 85 }} />
                <Typography sx={{ml:2,mt:3,fontWeight:"bold"}}>
                  LEVEL {data && data.user ? data.user.level + "" : "N/A"}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={8}>
              <StatusTabs />

              <Typography sx={{ mb: "5px", fontWeight: "bold" }}>
                Transactions
              </Typography>
              {!loading ? (
                <DataGridDemo
                  count={8}
                  columns={column}
                  demodata={transaction}
                  height={500}
                />
              ) : (
                <Box
                  sx={{
                    height: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.8,
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
