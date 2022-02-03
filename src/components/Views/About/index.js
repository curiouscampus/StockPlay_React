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

export default function About() {
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

        <Item sx={{backgroundImage:"url(https://images.pexels.com/photos/7957638/pexels-photo-7957638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",backgroundRepeat:" no-repeat",backgroundSize: "cover"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien
          odio, pretium sit amet condimentum sed, porttitor quis tellus. Mauris
          sem enim, sagittis efficitur nunc id, vehicula iaculis odio. Nunc eget
          gravida quam, et elementum orci. Curabitur rhoncus, urna eget bibendum
          auctor, ante metus lobortis erat, non tempus massa velit at odio.
          Nulla scelerisque diam vel semper congue. Pellentesque lorem nulla,
          molestie et ante ut, laoreet porta ipsum. Phasellus tortor sapien,
          finibus et fermentum et, porta non libero. Maecenas interdum, orci non
          feugiat pellentesque, massa nisl tristique est, sit amet tristique
          tellus quam a elit. Duis imperdiet ligula id elit commodo, vitae
          rutrum orci fringilla. Maecenas blandit mattis nunc, vel facilisis
          lorem laoreet nec. Mauris bibendum et nisi at auctor. Vestibulum
          gravida turpis sapien, ut feugiat dolor volutpat eget. Sed quis varius
          felis. Pellentesque quis justo dolor. Vestibulum sit amet porta sem.
          Ut vulputate, velit in dictum pellentesque, dolor eros placerat lacus,
          sit amet ultrices enim dolor quis sem. Suspendisse posuere hendrerit
          varius. Aenean cursus iaculis orci vel eleifend. Donec tincidunt odio
          orci, eget ultrices libero ornare at. Nullam dapibus justo ut libero
          placerat mattis. Aliquam sit amet efficitur augue. Nam semper erat
          nisl, in tincidunt lorem dapibus eget. Integer eu urna erat. Sed
          faucibus sagittis varius. Morbi sed arcu ligula. In hac habitasse
          platea dictumst. Aenean varius odio vitae enim dapibus, in facilisis
          sem semper. Vestibulum diam magna, ultricies luctus molestie vitae,
          fringilla quis est. Curabitur blandit lacus pulvinar aliquam molestie.
          Donec egestas nisi id augue auctor fringilla. Ut dignissim magna eu
          velit vulputate convallis. Nulla iaculis nec dolor a ullamcorper.
          Mauris tincidunt sapien sit amet erat dapibus tempor. Pellentesque
          condimentum finibus diam sit amet laoreet. Duis porta nibh eget magna
          vulputate, eu sagittis purus dignissim. Nam a justo efficitur,
          tincidunt lorem vitae, rutrum urna. Nulla venenatis metus sit amet
          ipsum gravida lacinia. Phasellus a nisi varius, pellentesque tortor
          quis, consequat ex. Cras suscipit lacus enim, quis iaculis urna
          scelerisque id. Sed eu condimentum ipsum, et congue magna. Etiam
          consequat elementum ex. Morbi egestas sapien a maximus sagittis. Sed a
          dapibus sapien. Nunc condimentum suscipit sapien, ut lacinia est
          efficitur nec. Quisque aliquam enim non purus facilisis, eu euismod
          dui hendrerit. Vivamus a odio orci. Mauris dapibus, justo id euismod
          rhoncus, odio justo fringilla purus, at suscipit risus libero a lacus.
          Donec sit amet convallis quam. Fusce fringilla lacinia elementum.
          Fusce volutpat nibh nec est faucibus, eu rhoncus lacus eleifend. Sed
          eget purus fermentum, pharetra dolor sed, volutpat sem. Vestibulum
          metus ante, pretium et interdum nec, faucibus euismod mi. Cras luctus
          orci leo, eget gravida eros imperdiet quis. Donec rhoncus pharetra
          congue. Nam sed consectetur eros. Etiam id posuere tellus, nec
          vulputate turpis. Phasellus turpis dui, semper vitae leo sed,
          consequat blandit augue.
        </Item>
      </Paper>
    </Box>
  );
}
