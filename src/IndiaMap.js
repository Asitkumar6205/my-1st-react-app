import React, { useEffect, useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import axios from "axios";
import "./styles.css"

function IndiaMap() {
  const [stateData, setStateData] = useState(0);
  const [data, setData] = useState(0);
//   confirmedCasesForeign: 0
// confirmedCasesIndian: 7677
// deaths: 129
// discharged: 7545
// loc: "Andaman and Nicobar Islands"
// totalConfirmed: 7677
  

  function onLocationClick(event) {
    let stateData={}
    if(data){
      stateData = data.filter(state=>state.loc.toLowerCase() === event.target.getAttribute("name").toLowerCase())
      setStateData(stateData[0]);
    }
  }

    useEffect(() => {
      axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((response)=>{
        setData(response.data.data.regional);
      })
      return () => {}
    })
    // console.log(stateData)
  return (
    <div>
            <div className="card">
            {Object.keys(stateData).map((key)=>{
              return(
                
                  <li  className="list" key={key}>
                  <div className="keys" >{key}</div>
                  <div className="valueKey">{stateData[key]}</div>
                  </li>
              
                
              )
            })}
            </div>
           <SVGMap 
              map={India}
              onLocationClick={onLocationClick}
              
              />
    </div>
  );
}

export default IndiaMap;





