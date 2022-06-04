import React from "react";

function AboutCard(props) {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div>
        <div className="bg-[#00d8ff] inline-flex rounded-full p-2">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold py-4">{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutCard;
