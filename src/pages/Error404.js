import { useRouteError } from "react-router-dom";
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const boxColor = "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)";
export default function Error404() {
  const navigate = useNavigate();

  const error = useRouteError();

  console.error(error);

  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        sx={{ minHeight: "100vh", background: boxColor, padding: "50px" }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{width:'100%'}}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.statusText || error.message}
          </Alert>

          <Button variant="contained" onClick={() => navigate("/")}>
            go to home
          </Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
