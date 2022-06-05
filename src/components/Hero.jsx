import React from "react";
import Herovid from "../assets/video.mp4";

function Hero() {
  return (
    <div className="w-full h-[90vh] top-[96px]" id="platform">
      <video
        className="object-cover h-full w-full absolute z-[-1]"
        src={Herovid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex justify-center items-center flex-col text-white text-center px-4">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="blue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity for millions of users and top Ethereum
          applications
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total Volume Secured: $45,465,564,349.45
        </p>
      </div>
    </div>
  );
}

export default Hero;
