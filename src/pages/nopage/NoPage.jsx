// eslint-disable-next-line no-unused-vars
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function NoPage() {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/f216a69d-a4e5-4385-b89d-6aafe01b8446/rig2xpVnRJ.json"
      style={{ height: "1000px", width: "2000px" }}
    >
      <Controls invisible={true} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  );
}

export default NoPage;
