import { useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Avatar,
  Container,
  CssBaseline,
  Button,
  ThemeProvider,
  Toolbar,
  createTheme,
  Divider,
} from "@mui/material";
import profile from "../src/profile.jpeg";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f6efef",
    },
    background: {
      default: "#f6efef",
    },
    text: { primary: "#2e2e2e" },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Raleway",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "#4fc4cf",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0e2e1",
          boxShadow: "none",
        },
      },
    },
  },
});

function App() {
  const [about, setAboutState] = useState(true);
  const [projects, setProjectsState] = useState(false);
  const [contact, setContactState] = useState(false);

  const handleAbout = () => {
    setAboutState(true);
    setProjectsState(false);
    setContactState(false);
  };

  const handleProjects = () => {
    setAboutState(false);
    setProjectsState(true);
    setContactState(false);
  };
  const handleContact = () => {
    setAboutState(false);
    setProjectsState(false);
    setContactState(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AppBar color="primary" position="relative" sx={{ boxShadow: 0 }}>
          <Toolbar style={{ padding: "0" }}>
            <Avatar src={profile}></Avatar>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                sx={{
                  color: "#33272a",
                  backgroundColor: theme.palette.background.default,
                }}
                onClick={handleAbout}
              >
                {"About"}
              </Button>
              <Button
                sx={{
                  color: "#33272a",
                  backgroundColor: theme.palette.background.default,
                }}
                onClick={handleProjects}
              >
                {"Projects"}
              </Button>
              <Button
                sx={{
                  color: "#33272a",
                  backgroundColor: theme.palette.background.default,
                }}
                onClick={handleContact}
              >
                {"Contact"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Divider />
      </Container>
      <br />
      <Box>
        <Box>{about && <About />}</Box>
        <Box>{projects && <Projects />}</Box>
        <Box>{contact && <Contact />}</Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
