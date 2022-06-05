import React from "react";
import AboutCard from "./AboutCard";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

function About() {
  return (
    <div className="w-full bg-black text-white text-center" id="about">
      <div className="max-w-[1240px] mx-auto px-4 py-16  ">
        <h1 className="py-4">A Growing Protocol Ecosystem</h1>
        <p className="py-4 text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repellendus minima aperiam numquam tempora voluptate, magni ex odit
          earum delectus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis, eum.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* card */}
          <AboutCard
            icon={<SiHiveBlockchain size={40} />}
            heading=" Reliable, tamper-proof network"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus dolorem, veniam, fugit ipsum deleniti"
          />
          <AboutCard
            icon={<SiStrapi size={40} />}
            heading="Seamless conection to any API"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus dolorem, veniam, fugit ipsum deleniti"
          />
          <AboutCard
            icon={<SiFsecure size={40} />}
            heading="Proven ready-made solutions"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus dolorem, veniam, fugit ipsum deleniti"
          />
          <AboutCard
            icon={<VscServerProcess size={40} />}
            heading="Secure off-chain computation"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus dolorem, veniam, fugit ipsum deleniti"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
