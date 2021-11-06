import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

function IndiaMap() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    // console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }

  return (
    <>
      <p>{stateName}</p>
      <p>{stateCode}</p>
      <SVGMap map={India} onLocationClick={onLocationClick} />
    </>
  );
}

export default IndiaMap;


