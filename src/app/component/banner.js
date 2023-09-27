"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import c1 from "./assets/c-1.jpg"
import c2 from "./assets/c-2.jpg"
import c3 from "./assets/c-3.jpg"
// import hm from "./assets/hm.png"


const Banner = () => {
    const cards = [
        {
          id: "0",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png",
          description: "Up to 70% off | Clearance store",
        },
        {
          id: "1",
          image:
            "data:image/png;base64,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",
          description: "Up to 70% off | Clearance store",
        },
        {
          id: "2",
          image:
            "data:image/png;base64,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",
          description: "Up to 70% off | Clearance store",
        },
        {
            id: "3",
            image:
              "data:image/png;base64,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",
            description: "Up to 70% off | Clearance store",
          },
      ]; 
  return (
    <div>
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
         className="mx-auto my-5"
      >
        <div>
          <Image className="w-" src={c1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image className="w-" src={c2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image className="w-" src={c3}/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="hidden py-10 px-10 lg:flex flex-row space-x-3  mt-2 cursor-pointer ">
        {cards?.map((item, index)=>(
            <div className="p-4 rounded-lg bg-white w-full border shadow-md flex flex-col space-y-3 " key={index}>
                <h1 className="font-bold text-xl ">{item?.description}</h1>
               <img className="object-cover  bg-cover " src={item?.image}/>
                <h1>{}</h1>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
