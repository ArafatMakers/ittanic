import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./GameImage.css";

const GameImage = () => {
  const StyledButton = styled(Button)`
    background-color: black;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    &:hover {
      background-color: transparent;
      color: black;
      border: 1px solid black;
    }
  `;
  return (
    <div>
      <h2 className="gameText">
        TOP 2022
        <br />
        BEST GAMES
      </h2>
      <Box
        className="gameblock"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div className="game gameblock1_1">
          <img
            src="https://static.gabestore.ru/product/h5fW18djjHwlLPzz0QXULYlrE_3_amiA.jpg"
            alt=""
          />
          <h4>Online Shooter</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dicta?
          </p>
          <StyledButton>VIEW MORE</StyledButton>
        </div>
        <div className="game gameblock1_2">
          <img
            src="https://static.gabestore.ru/product/qseEwhJttZm-NwvPJARPnn2q-z2cqV52.jpg"
            alt=""
          />
          <h4>open world</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            harum!
          </p>
          <StyledButton>VIEW MORE</StyledButton>
        </div>
        <div className="game gameblock1_3">
          <img
            src="https://static.gabestore.ru/product/YGcXBWTl89brGxr7t21FlTucV4PUxyFw.jpg"
            alt=""
          />
          <h4>strategic DOTA2 </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            fugit?
          </p>
          <StyledButton>VIEW MORE</StyledButton>
        </div>
      </Box>
    </div>
  );
};

export default GameImage;
