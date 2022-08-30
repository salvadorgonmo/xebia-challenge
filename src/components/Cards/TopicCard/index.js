import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const card = (name, stargazerCount = 0, onClick, id, isChildren) => (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="h2"
        sx={{ fontSize: "24px" }}
        color="text.secondary"
        gutterBottom
      >
        Topic
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Stargazer count
      </Typography>
      <Typography>{stargazerCount}</Typography>
    </CardContent>
    {isChildren && (
      <CardActions>
        <Button id={id} onClick={onClick} size="small">
          See related topics
        </Button>
      </CardActions>
    )}
  </React.Fragment>
);

export const OutlinedCard = ({
  name,
  stargazerCount,
  onClick,
  id,
  isChildren = true,
}) => {
  return (
    <Box sx={{ width: "fit-content", marginBottom: "40px" }}>
      <Card variant="outlined">
        {card(name, stargazerCount, onClick, id, isChildren)}
      </Card>
    </Box>
  );
};

export default OutlinedCard;
