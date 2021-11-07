import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <Fade bottom delay={props.delayInMs} distance="20px">
        <div
          className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
        >
          {props.children}
        </div>
      </Fade>
    </div>
  );
}

Card.propTypes = {
  className: propTypes.string,
  hasShadow: propTypes.bool,
  delayInMs: propTypes.number,
};
