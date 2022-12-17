import { useRouteError } from "react-router-dom";
import React from "react";
import { Typography } from "@mui/material";


export default function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
    <React.Fragment>
    <Typography>
    {error.statusText || error.message}
    </Typography>
    </React.Fragment>
  );
}