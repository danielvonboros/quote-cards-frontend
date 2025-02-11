import { Box, Button, Paper, Typography } from "@mui/material";
import { mockCardContent } from "./mockCardContent";
import { useState } from "react";

const Card = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const goToPrevious = () => {
    setCurrentCard((prevIndex) =>
      prevIndex === 0 ? mockCardContent.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentCard((prevIndex) =>
      prevIndex === mockCardContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = mockCardContent[currentCard];

  return (
    <Paper sx={{ width: "350px", height: "500px" }}>
      <Box sx={{ my: "auto" }}>
        <Typography>{currentItem.text}</Typography>
      </Box>
      <Box>
        <Button onClick={goToPrevious}> (-) </Button>
        <Button onClick={goToNext}> (+) </Button>
      </Box>
    </Paper>
  );
};

export default Card;
