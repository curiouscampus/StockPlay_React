import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function DetailList({ details }) {
  return (
    <List
      sx={{
        width: "100%",
        height: 200,
        bgcolor: "background.paper",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "0.2em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Current Price
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketPrice}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Today High
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketDayHigh}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Today Low
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketDayLow}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Open
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketOpen}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Prev. Close
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketPreviousClose}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Volume
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketVolume}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Change
              </Typography>
              <Typography color="primary">
                $ {details.price.regularMarketChange}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", mr: 1, fontWeight: "bold" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Change Percentage
              </Typography>

              <Typography color="primary">
                % {(details.price.regularMarketChangePercent * 100).toFixed(2)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
