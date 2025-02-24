import { Box, IconButton, Paper, SvgIcon, Typography } from "@mui/material";
import { mockCardContent } from "./mockCardContent";
import { useState } from "react";

import HeartOutline from "../../assets/icons/heartOutline.svg?react";
import ChevronLeft from "../../assets/icons/chevronLeft.svg?react";
import ChevronRight from "../../assets/icons/chevronRight.svg?react";

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

  let processBackgroundImage: string = "";
  switch (currentItem.color) {
    case 0:
      processBackgroundImage = `url('/cardBackgroundYellow.svg')`;
      break;
    case 1:
      processBackgroundImage = `url('/cardBackgroundRedBlue.svg')`;
      break;
    case 2:
      processBackgroundImage = `url('/cardBackgroundGreen.svg')`;
      break;
    default:
      processBackgroundImage = `url('/cardBackgroundGreen.svg')`;
  }

  return (
    <>
      <Paper
        sx={{
          width: "350px",
          height: "500px",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), 
          ${processBackgroundImage}`,
          borderRadius: "50px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "26px",
              color: "black",
              textShadow: "2px 2px #ababab",
              fontFamily: "Poppins",
            }}
          >
            {currentItem.text}
          </Typography>
        </Box>
      </Paper>
      <IconButton onClick={goToPrevious}>
        <SvgIcon sx={{ fill: "none" }} component={ChevronLeft} />
      </IconButton>
      <IconButton>
        <SvgIcon component={HeartOutline} />
      </IconButton>
      <IconButton onClick={goToNext}>
        <SvgIcon sx={{ fill: "none" }} component={ChevronRight} />
      </IconButton>
    </>
  );
};

export default Card;
