import React from "react";
type ike = {
  tony: any;
};
const Productlist: React.FC<ike> = ({ tony }) => {
  return <div>{tony.name}</div>;
};

export default Productlist;
