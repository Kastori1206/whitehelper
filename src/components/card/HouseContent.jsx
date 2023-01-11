import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import Stack from "@mui/material/Stack";

export default function HouseContent({ locate, rate, price }) {
  return (
    <Box>
      <Typography variant="h7" component="div" align="left">
        {locate}
      </Typography>

      <Typography variant="body2" component="div" align="right">
        <StarRateIcon sx={{ fontSize: "small" }} />
        {rate}
      </Typography>

      <Typography gutterBottom variant="h7" component="div">
        {price}
      </Typography>
    </Box>
  );
}
