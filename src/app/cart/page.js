"use client";
import React from "react";
import Header from "../component/header";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusSmallIcon } from "@heroicons/react/24/solid";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const stripePromise = loadStripe(
    "pk_test_51Nt79uSClsQA0EETlDtPVGQSE7CeK7wF5ZflVdiDGKvBZXkDt4dxPklWy1JmymqORbGwep2VwH2fPmW75oSuTDMZ00ffcwEMVe"
  );
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const grandTotal = total + 65;

  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ body:cart}),
      });
      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data?.session.id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className=" relative grid grid-cols-8 h-screen bg-gray-200 ">
        <div className="flex flex-col col-span-5 mt-8 ml-20">
          <h2 className="text-xl font-bold">Your Shoping cart</h2>
          {cart?.map((item, index) => (
            <div key={index} className=" border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4 ">
              <img
                width={80}
                height={80}
                objectFit={"contain"}
                src={item?.image}
              />

              <div className=" flex-grow ">
                <p className="text-sm line-clamp-2">{item?.title}</p>
                <p className=" text-xl font-semibold ">₹ {item?.price}</p>
                {item?.descripation ? (
                  <p className=" text-xs line-clamp-2 font-normal ">
                    {item?.descripation}
                  </p>
                ) : (
                  <div>
                    <p className=" text-sm line-clamp-2 font-normal  ">
                      Color : {item?.color}
                    </p>
                    <p className=" text-sm line-clamp-2 font-normal ">
                      Size : {item?.size}
                    </p>
                  </div>
                )}
                <div className=" flex flex-row mt-1 space-x-2">
                  <p
                    onClick={() => deleteItem(item)}
                    className=" text-xs font-semibold text-cyan-600 cursor-pointer"
                  >
                    Delete
                  </p>
                  <p className=" text-xs font-semibold text-cyan-600 cursor-pointer">
                    Save for later
                  </p>
                  <p className=" text-xs font-semibold text-cyan-600 cursor-pointer">
                    See more like this
                  </p>
                  <p className=" text-xs font-semibold text-cyan-600 cursor-pointer">
                    Share
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <button className=" rounded-full bg-gray-300">
                    <MinusSmallIcon
                      onClick={() => decreaseQuantity(item)}
                      className="h-4 w-4"
                      class="h-6 w-6 text-white-500"
                    />
                  </button>
                  <span className="text-gray-500">{item?.quantity}</span>

                  <button className="rounded-full bg-gray-300">
                    <PlusSmallIcon
                      onClick={() => increaseQuantity(item)}
                      className="h-4 w-4"
                      class="h-6 w-6 text-white-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 mt-16 ml-20">
          <h1 className="mb-2">Choose a delivery Address</h1>
          <div>
            <div className="bg-white rounded-sm p-4 mt-2">
              <h4 className=" text-xs text-gray-400 ">Select Location</h4>
              <p className="text-xs text-gray-400">
                Please select loaction, so that we can find a place that deliver
                to you{" "}
              </p>
              <button className=" rounded-sm py-1 mt-2 text-sm font-semibold text-gray-600 ">
                Add Address
              </button>
            </div>
          </div>

          <h3 className="mt-4">Offers</h3>
          <div>
            <div className="bg-white rounded-sm p-4 mt-2">
              <h4 className=" text-xs text-gray-400 ">Apply Coupan</h4>
              <p className="text-xs text-gray-400">
                Get Discount with your order
              </p>
            </div>
          </div>

          <h3 className="mt-3">Price Details</h3>
          <div className="bg-white rounded-sm mt-2 p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs">Sub total</h4>
              <p className="text-sm font-normal">₹ {total.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs">Discount</h4>
              <p className="text-sm font-normal">-</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs">Taxes and Charges</h4>
              <p className="text-sm font-normal">₹ 65</p>
            </div>
            <hr className="w-full mt-1 decoration-dotted" />
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold">Grand Total</h4>
              <p className="text-sm font-normal">₹ {grandTotal.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-yellow-500 text-center font-normal text-white rounded-md py-2 px-3 w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
