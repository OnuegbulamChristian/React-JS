import React, { useState } from "react";
import { userInfo } from "../../Data/Data";
import Cartitems from "./Cartitems";
import Productlist from "./Productlist";

const Product = () => {
  const [list, setList] = useState(userInfo);
  console.log(list);
  return (
    <div>
      <Cartitems val={list} />
      <Productlist tony={list} />
      {/* {productlist.map((items: any) => (
        <div>
          <h6>{items.price}</h6>
          <h3>{items.description}</h3>
          <h2>{items.id}</h2>
          <p>{items.productName}</p>
          <h4>{items.address.city}</h4>
          <h4>{items.address.state}</h4>
        </div>
      ))} */}
    </div>
  );
};

export default Product;
