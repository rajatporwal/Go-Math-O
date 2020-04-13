import React from "react";

const PageNotFound = () => {
  return (
    <div className="page">
      <div className="page__not--found">
        <svg class="not--found__icon-1">
          <use xlinkHref="img/sprite.svg#icon-sad" />
        </svg>
        <h2 className="heading-2 heading-2--dark">
          Sorry, the page you visited does not exist.
        </h2>
        <h3 className="heading-3">
          Please go back to home page.
          <svg class="not--found__icon-2">
            <use xlinkHref="img/sprite.svg#icon-home" />
          </svg>
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
