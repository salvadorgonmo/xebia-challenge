import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Paragraph,
  Button,
} from "../../common";

export const CardItem = ({
  cardTitle,
  header,
  subHeader,
  bottomDescription,
  onClick,
  id,
  buttonDescription,
}) => {
  return (
    <Card>
      <CardContent>
        <Paragraph>{cardTitle}</Paragraph>
        <Paragraph>{header}</Paragraph>
        <Paragraph>{subHeader}</Paragraph>
        <Paragraph>{bottomDescription}</Paragraph>
      </CardContent>
      {buttonDescription && onClick && (
        <CardActions>
          <Button id={id} onClick={onClick}>
            {buttonDescription}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CardItem;
