import React, { useEffect, useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import axios from "axios";

function IndiaMap() {
  const [stateData, setStateData] = useState(0);
  const [data, setData] = useState();
//   confirmedCasesForeign: 0
// confirmedCasesIndian: 7677
// deaths: 129
// discharged: 7545
// loc: "Andaman and Nicobar Islands"
// totalConfirmed: 7677
  

  function onLocationClick(event) {
    let stateData=[]
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

  return (
    <div>
            {Object.keys(stateData).map((key)=>{
              return(
                <>
               
                  {key + "=" + stateData[key]}
                  <br/>
              
                </>
              )
            })}
           <SVGMap map={India} onLocationClick={onLocationClick} />
    </div>
  );
}

export default IndiaMap;





