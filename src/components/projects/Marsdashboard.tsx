import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export function MarsDashboard() {
  return (
    <Card>
      <CardHeader title="Mars Dashboard" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mars Dashboard display images captured by the Mars Rovers
        </Typography>
      </CardContent>
      <CardActions>
        <CardActionArea>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" size="small">
              Typescript
            </Button>
            <Button variant="contained" size="small">
              React
            </Button>
            <Button variant="contained" size="small">
              HTML
            </Button>
            <Button variant="contained" size="small">
              CSS
            </Button>
          </Box>
        </CardActionArea>
      </CardActions>
    </Card>
  );
}
