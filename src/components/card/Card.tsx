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
    <>
      <Paper
        sx={{
          width: "350px",
          height: "500px",
          backgroundImage: "url(/public/cardBackground.svg)",
        }}
      >
        <Box>
          <Typography>{currentItem.text}</Typography>
        </Box>
      </Paper>
      <Button onClick={goToPrevious}> (-) </Button>
      <Button>FAV</Button>
      <Button onClick={goToNext}> (+) </Button>
    </>
  );
};

export default Card;
