/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { RemoveFromCart } from "../Redux/Cart";

const Cartdiv = (props) => { 
    const {data}=props;
  console.log(data);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(data?.price);

  const Substraction = () => {
    if (count == 1) {
      setCount(1);
      setValue(data?.price);
    } else {
      setCount((prevcount) => prevcount - 1);
      setValue(data?.price * (count - 1));
    }
  };
  const Addition = () => {
    if (count == available) {
      setCount(available);
      setValue(data?.price * (count + 1));
    } else {
      setCount((prevcount) => prevcount + 1);
      setValue(data?.price * (count + 1));
    }
  };
  const Bought = () => {
    window.alert(`You bought ${count} ${data?.title}!!`);
    setCount(1);
    setValue(data?.price);
  };
  const available = data?.productInStock;
  return (
    <div className="flex h-48  mb-7 border border-black w-sreen">
      <div className="flex flex-row h-full  w-full">
        <div className="flex  h-full w-1/3">
          <img
            src={data?.productUrl[0]}
            alt="pc"
            className="flex h-full animate-none w-full"
          />
        </div>
        <div className="flex flex-col  justify-evenly h-full w-1/3">
          <span className="flex mb-3 font-sans font-bold">
            <span>Item: </span>
            {" "}
            {data?.title}
          </span>
          <span className="flex mb-3 font-sans font-bold">
            <span>Price: </span>
            {data?.price}Tsh
          </span>
          <span className="flex mb-3 text-sm font-sans font-bold">
            <span>Discount: </span>
            {data?.discount}Tsh
          </span>
          <span className="flex mb-3 animate-pulse font-sans font-bold">
            FREE DELIVERY!!
          </span>
        </div>
        <div className="flex flex-col  justify-around  h-full w-1/3">
          <span className="flex items-center justify-center mt-3  mb-3">
            <div className="h-full w-1/2  rounded-full border border-black flex flex-row ">
              <div
                onClick={Substraction}
                className="h-full  w-1/3 flex justify-center items-center hover:cursor-pointer "
              >
                <span className="font-bold">-</span>
              </div>
              <div className="h-full flex justify-center items-center w-1/3 ">
                <span>{count}</span>
              </div>
              <div
                onClick={Addition}
                className="h-full  flex justify-center items-center w-1/3 hover:cursor-pointer"
              >
                <span className="font-bold">+</span>
              </div>
            </div>
          </span>
          <div className="flex justify-center items-center flex-col">
            {" "}
            <span>
              Only <span>{available}</span> items left!
            </span>
            <span className="flex mb-3 text-sm">
              <span>You are about to buy : </span>
              {count}
              <span className="ml-1"> item(s)!</span>
            </span>
          </div>
          <div className="h-auto w-full  flex justify-center">
            <span className="mr-2">
              <span>
                Total: <span>{value}</span>Tsh
              </span>
            </span>
            <Button
              className="animate-pulse ml-2 bg-none"
              label="BUY"
              onClick={Bought}
              style={{
                backgroundColor: "green",
                height: "60%",
              }}
            />
          </div>
          <div className="h-auto w-full  flex justify-center">
            <Button
              className="animate-none bg-none"
              label="Remove From Cart"
              onClick={() => dispatch(RemoveFromCart(data))}
              style={{
                backgroundColor: "red",
                height: "60%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdiv;