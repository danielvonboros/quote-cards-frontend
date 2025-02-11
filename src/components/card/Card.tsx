import { Box, Paper } from "@mui/material";

const Card = () => {
  return (
    <Paper sx={{ width: "350px", height: "500px" }}>
      <Box sx={{ my: "auto" }}>
        This is an example card made of the Paper component
      </Box>
    </Paper>
  );
};

export default Card;
