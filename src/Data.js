import React from 'react'
import Map from './components/map';
import "./App.css"

const Data = () => {
    return(
        <div>
            
            <div className='bg-light-green dib br3 pa2 ma2 grow'>
                <h2 style={{
                    color:"rgb(18, 173, 83)"
                }}>Active</h2>
                <h1>2021</h1>
            </div>

            <div className="bg-light-pink dib br3 pa2 ma2 grow">
                <h2 style={{
                    color:"rgb(230, 66, 120)"
                }}>Confirmed</h2>
                <h1>1110918</h1>
            </div>

            <div className="bg-light-red dib br3 pa2 ma2 grow">
                <h2 style={{
                    color:"rgb(202, 61, 26)"
                }}>Recovered</h2>
                <h1>202190</h1>
            </div>

            <div className=" bg-light-blue dib br3 pa2 ma2 grow">
                <h2 style={{
                    color:"rgb(22, 95, 155)"
                }}>Died</h2>
                <h1>2024</h1>
            </div>
            <div class="MAP"><Map/></div>
        </div>
    );
}

export default Data;