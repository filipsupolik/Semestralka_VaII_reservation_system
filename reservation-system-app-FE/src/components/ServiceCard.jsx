import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { themeOptions } from "../theme";

export default function ServiceCard({ title, description, price, duration }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: themeOptions.palette?.background?.paper,
        color: themeOptions.palette?.text?.primary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Tu môže byť obrázok */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color={themeOptions.palette?.text?.secondary}
          gutterBottom
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            color={themeOptions.palette?.text?.primary}
          >
            {price} - {duration}
          </Typography>
          <Button variant="contained" color="primary" size="small">
            BOOK
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
