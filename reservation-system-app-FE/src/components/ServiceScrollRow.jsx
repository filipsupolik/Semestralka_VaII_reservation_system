import React from "react";
import { Box, Typography } from "@mui/material";
import { themeOptions } from "../theme";
import ServiceCard from "./ServiceCard";

export default function ServiceScrollRow({ title, services }) {
  return (
    <Box sx={{ width: "100%", py: 3 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        color={themeOptions.palette?.primary?.main}
        sx={{ mb: 2, ml: 2 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          overflowX: "auto",
          px: 2,
        }}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </Box>
    </Box>
  );
}
