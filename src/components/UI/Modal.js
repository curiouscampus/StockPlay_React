import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { GlobalContext } from "../context/Provider";
import { updateuser } from "../context/actions/auth/userUpdate";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from '@mui/icons-material/Close';
import { useAlert } from "react-alert";
import { serverUrl } from "../../constants";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius:4,
};

export default function BasicModal({ text, curentPrice, stockId, stockName }) {
  const {
    authDispatch,
    authState: {
      auth: { data, loading },
    },
  } = React.useContext(GlobalContext);
  const alert = useAlert();

  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handelButton = (text) => {
    setCounter(0)
    let reqParams = {
      atPrice: curentPrice,
      quantity: counter,
      stockId,
      stockName,
    };
    let url =
      text === "BUY"
        ? serverUrl + "/api/buy"
        : serverUrl + "/api/sell";
    updateuser({ alert, url, reqParams, token: data.token })(authDispatch);
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: text === "BUY" ? "green" : "primary",
          width: { xs: "6rem", md: "8rem", lg: "10rem" },
        }}
        onClick={handleOpen}
      >
        {text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={style}>
            <CloseIcon sx={{float:'right',mb:1}} onClick={() => setOpen(false)}/>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Typography sx={{ fontWeight: "bold", mr: 2 }}>
                Quantity
              </Typography>
              <Button
                disabled={counter < 1}
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </Button>
              <Button>{counter}</Button>
              <Button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
            <ButtonGroup
              sx={{ width: "100%", mt: 2 }}
              size="small"
              aria-label="small outlined button group"
            >
              <Typography sx={{ fontWeight: "bold", mr: 3 }}>Amount</Typography>
              <Button>{(counter * curentPrice).toFixed(4)}</Button>
            </ButtonGroup>
            <Button
              sx={{
                backgroundColor: text === "BUY" ? "green" : "primary",
                mt: 3,
                width: { xs: "6rem", md: "8rem", lg: "10rem" },
              }}
              onClick={() => handelButton(text)}
              disabled={counter === 0}
            >
              {text}
            </Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
