import React, { useEffect, useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import axios from "axios";

function IndiaMap() {
  const [stateData, setStateData] = useState(null);
  const [data, setData] = useState(null);

  function onLocationClick(event) {
    let stateData=[]
    if(data){
      stateData=data.filter(state=>state.loc.toLowerCase()===event.target.getAttribute("name").toLowerCase())
      setStateData(stateData[0]);
    }
    // console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }

  useEffect(() => {
    axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((response)=>{
      console.log(response.data.data.regional);
      setData(response.data.data.regional);
    })
    return () => {}
  }, [])

  return (
    <>
      <p>{JSON.stringify(stateData)}</p>
      <SVGMap map={India} onLocationClick={onLocationClick} />
    </>
  );
}

export default IndiaMap;


