import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

export default function Feature(props) {
  return (
    <Fade bottom delay={props.delayInMs} distance="20px">
      <div className="tiles-item">
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <img
                src={props.data.imgSrc}
                alt={props.data.imgAlt}
                width="64"
                height="64"
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{props.data.title}</h4>
            <p className="m-0 text-sm">{props.data.description}.</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

Feature.propTypes = {
  delayInMs: propTypes.number,
  data: propTypes.object,
};
