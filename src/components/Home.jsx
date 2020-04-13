import React from "react";
import Card from "./common/Card";
import CARD_TEXT from "../enums/helper-text/CardText";

const Home = () => {
  return (
    <div className="home">
      <div className="cards">
        {CARD_TEXT.map(card => {
          return <Card {...card} />;
        })}
      </div>
    </div>
  );
};

export default Home;
