import { Box, Container, Typography } from "@mui/material";
import resume from "../resume.pdf";

export function Resume() {
  return (
    <Container>
      <Typography variant="h5">Resume</Typography>
      <br />
      <Box>
        <embed
          src={resume}
          title="PDF Viewer"
          width={"100%"}
          height={"1000px"}
        />
      </Box>
    </Container>
  );
}
