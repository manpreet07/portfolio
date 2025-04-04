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
  Typography,
  createTheme,
  Divider,
} from "@mui/material";
import profile from "../src/profile.jpeg";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#faeee7",
    },
    background: {
      default: "#faeee7",
    },
    text: { primary: "#33272a" },
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
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
          borderBottom: "none",
        },
      },
    },
  },
});

function App() {
  const [about, setAboutState] = useState(true);
  const [projects, setProjectsState] = useState(false);
  const [contact, setContactState] = useState(false);
  const [skills, setSkillsState] = useState(false);
  const [resume, setResumeState] = useState(false);

  const handleAbout = () => {
    setAboutState(true);
    setProjectsState(false);
    setContactState(false);
    setSkillsState(false);
    setResumeState(false);
  };

  const handleProjects = () => {
    setAboutState(false);
    setProjectsState(true);
    setContactState(false);
    setSkillsState(false);
    setResumeState(false);
  };
  const handleContact = () => {
    setAboutState(false);
    setProjectsState(false);
    setContactState(true);
    setSkillsState(false);
    setResumeState(false);
  };
  const handleSkills = () => {
    setAboutState(false);
    setProjectsState(false);
    setContactState(false);
    setSkillsState(true);
    setResumeState(false);
  };

  const handleResume = () => {
    setAboutState(false);
    setProjectsState(false);
    setContactState(false);
    setSkillsState(false);
    setResumeState(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AppBar color="primary" position="relative" sx={{ boxShadow: 0 }}>
          <Toolbar style={{ padding: "0" }}>
            <Avatar src={profile}></Avatar>

            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              paddingLeft={2}
            >
              Manpreet Singh
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button sx={{ color: "#33272a" }} onClick={handleAbout}>
                {"About"}
              </Button>
              <Button sx={{ color: "#33272a" }} onClick={handleSkills}>
                {"Skills"}
              </Button>
              <Button sx={{ color: "#33272a" }} onClick={handleProjects}>
                {"Projects"}
              </Button>
              <Button sx={{ color: "#33272a" }} onClick={handleResume}>
                {"Resume"}
              </Button>
              <Button sx={{ color: "#33272a" }} onClick={handleContact}>
                {"Contact"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Divider />
        <br />
      </Container>
      <Box>
        <Box>{about && <About />}</Box>
        <Box>{skills && <Skills />}</Box>
        <Box>{projects && <Projects />}</Box>
        <Box>{resume && <Resume />}</Box>
        <Box>{contact && <Contact />}</Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
