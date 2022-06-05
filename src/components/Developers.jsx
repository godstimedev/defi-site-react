import React from "react";
import Terminal from "../assets/terminal.png";

function Developers() {
  return (
    <div className="w-full text-white bg-black" id="developers">
      <div className="max-w-[1240px] px-4 py-16 lg:grid lg:grid-cols-4 items-center">
        <div className="col-span-3">
          <h1>Superpowers for DEFI developers</h1>
          <p>
            Lorem ipsum <span className="text-[#00d8ff]">dolorsit</span> amet,
            consectetur <span className="blue">adipisicing</span> elit. Pariatur
            nisi, adipisci accusantium id optio neque quae alias nemo maiores
            odio!
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            src={Terminal}
            alt="/"
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
}

export default Developers;
