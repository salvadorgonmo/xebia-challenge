import React from "react";

import { CardItem } from "./CardItem";

export const CardList = ({ items = [], onClick }) => {
  return items.map((item) => (
    <CardItem
      key={item.id}
      cardTitle={item.name}
      header={`Stargazer count: ${item.stargazerCount}`}
      onClick={onClick}
      buttonDescription="See related topics"
      id={item.name}
      isChildren={item.isChildren}
    />
  ));
};

export default CardList;
