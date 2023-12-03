import { Box, Typography, Container, Link } from "@mui/material";

export function Contact() {
  return (
    <Container>
      <Typography variant="h5">Contact</Typography>
      <br />
      <Box>
        <Typography variant="subtitle1">manpreet1107@gmail.com</Typography>
        <Typography variant="subtitle1">+1 (857)-294-9978</Typography>
        <Typography variant="subtitle1">
          <Link
            href="https://www.linkedin.com/in/manpreet-singh-5002105a/"
            style={{ color: "#2e2e2e" }}
          >
            LinkedIn
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
