import React from "react";

const Foo = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Foo;
