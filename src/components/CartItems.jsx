
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { Clearcart } from "../Redux/Cart";
import Cartdiv from "./Cartdiv";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
    // const{id}=useParams();
//   const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carts = useSelector((item) => item.name.cart);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-row h-full p-1">
          <i className="pi pi-cart-plus text-green-600 " />
          <p
            onClick={() => navigate("/Homepage")}
            className="hover:cursor-pointer"
          >
            Shopcart
          </p>
        </div>{" "}
        <button
          className="bg-red-600 rounded-full p-1"
          onClick={() => dispatch(Clearcart())}
        >
          CLEAR CART
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "10%",
        }}
      >
        {carts?.map((item, index) => (
          <Cartdiv data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;