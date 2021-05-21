import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const View = (props) => {
  const { children, onClick } = props;
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <div
      className={status}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
};

export default View;
