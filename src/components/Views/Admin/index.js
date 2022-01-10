import * as React from "react";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Chip, Grid, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Manage() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
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
          height: "90vh",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "50vw",
              height: "50vh",
              padding: 5,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <AppBar position="static">
              <Toolbar
                variant="dense"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h6" color="inherit" component="div">
                  Manage Stock List
                </Typography>
              </Toolbar>
            </AppBar>
            <Box sx={{ mt: 5 }}>
              <TextField
                id="standard-name"
                label="Stock ID"
                placeholder="ETH-USD"
                InputProps={{
                  endAdornment: (
                    <Button variant="outlined" sx={{ pr: 3, pl: 3 }}>
                      ADD
                    </Button>
                  ),
                }}
              />
            </Box>
            <Box sx={{ m: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    color="success" label="ETH-USD"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
