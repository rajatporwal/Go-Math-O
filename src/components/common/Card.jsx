import React, { Fragment } from "react";

const Card = ({ icon, heading, text }) => {
  return (
    <div className="card">
      <svg class="card__icon">
        <use xlinkHref={icon} />
      </svg>
      <h4 class="heading-4 heading-4--dark">{heading}</h4>
      <p class="card__text">
        {text.split("\n").map(i => {
          return (
            <Fragment>
              <p className="card__p">{i}</p>
            </Fragment>
          );
        })}
      </p>
    </div>
  );
};

export default Card;
