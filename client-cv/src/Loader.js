import React from "react";

import "./css/Loader.css";

export default function Loader(props) {

  const size = props.size;

  const renderBig = (
    <div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text skeleton-text__body"></div>
    </div>
  );

  const renderMedium = (
    <div>
      <div className="skeleton skeleton-text-medium"></div>
      <div className="skeleton skeleton-text-medium"></div>
      <div className="skeleton skeleton-text-medium skeleton-text__body"></div>
  </div>
  );

  const renderSmall = (
    <div>
      <div className="skeleton skeleton-text skeleton-text__body_small"></div>
    </div>
  );

  const renderPicture = (
    <div>
      <div className="skeleton card__body-profile"></div>
    </div>
  );

  function Skeleton() {
    if (size == "s")
      return renderSmall;

    if (size == "m")
      return renderMedium;

    if (size == "p")
      return renderPicture;

    return renderBig
  }

  return (
    <Skeleton />
  );
}