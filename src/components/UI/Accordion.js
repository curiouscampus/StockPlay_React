import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

export default function ControlledAccordions({ title, subTitle, summary }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        sx={{
          "& .MuiAccordionSummary-content": {
            justifyContent: "space-evenly",
          },
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {" "}
        <Avatar sx={{height:45,width:45, bgcolor:'primary.main'}} >{title[0]}</Avatar>
        <Typography sx={{mt:'2px',fontFamily:'Times New Roman, serif' }} variant="h5" >{title}</Typography>
        <Typography
          sx={{
            pt: 1,
            color: "text.secondary",
            display: { xs: "none", md: "block" },
          }}
        >
          {subTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{summary}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
