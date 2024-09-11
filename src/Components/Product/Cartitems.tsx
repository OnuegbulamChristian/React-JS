import React from "react";
type ike = {
  val: any;
};

const Cartitems: React.FC<ike> = ({ val }) => {
  return <div>{val.name}</div>;
};

export default Cartitems;
