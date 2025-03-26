import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Script from "../scripts/script.js";
import  descriptions  from '../scripts/data.js';

function Simulation() {
    const encodingType = localStorage.getItem('encodingType');
    const defaultBitStream = '10101110011';
    const [currBitStream, setCurrBitStream] = useState(defaultBitStream);

    useEffect(() =>  {
        const canvas = document.getElementById('canvasDiv');
        if (!canvas) return;
        Script.initCanvas(canvas);
        Script.drawAxes();
        Script.updateUI(defaultBitStream);
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        setCurrBitStream(document.getElementById('bitStream').value);  
        if (Script.validate(event) && Script.updateUI(currBitStream)) {
            console.log("Form submitted.");
        }
    }
    
    function generateRandomBitStream() {
        return Array.from({ length: 11 }, () => Math.round(Math.random())).join('');
    }      

    function randomBitStream(event) {
        event.preventDefault();
        let inputField = document.getElementById('bitStream');
        inputField.value = generateRandomBitStream();
        handleSubmit(event);
    }


    return (
    <div data-bs-theme="dark" className="bg-dark" style={{height: "100%"}}>
        <Link to='/'>
        <button className='btn btn-sm btn-outline-secondary p-2 mt-3 mx-3' style={{'marginBottom': '-20px'}}>◀️Back to Home</button>
        </Link>
        <h1 className="text-center text-white p-3">{encodingType} Line Coding</h1>

        <form action="" onSubmit={handleSubmit} className="container mt-4 px-4 py-3 rounded border">
            <label htmlFor="bitStream" className="text-white form-label">Bitstream:</label>
            <div className="d-flex gap-2 flex-wrap">
                <input type="text"  className="form-control" placeholder={`e.g. ${defaultBitStream}`} id="bitStream" autoComplete="off"/>
                <button type="submit" style={{borderRadius: "0.8rem", fontSize:'0.9rem'}} className="btn btn-sm border border-1 btn-outline-success py-1 px-3 my-1">Simulate</button>
                <button type="submit" style={{borderRadius: "0.8rem", fontSize:'0.9rem'}} onClick={randomBitStream} className="btn btn-sm border border-1 btn-outline-danger py-1 px-3 my-1">Random</button>
            </div>
        </form>

        <div className="mt-5 d-flex justify-content-center">
            <canvas id="canvasDiv" className="p-3 border border-1" style={{backgroundColor : "white", width: '65vw', height: '24vw'}}></canvas>
        </div>
        <div className="text-center text-info mt-2 fs-6 bg-dark">Digitized signal for {currBitStream} </div>
        <div id="desc" className="px-5 py-3 text-break text-white bg-dark" dangerouslySetInnerHTML={{__html: descriptions[encodingType]}}></div>
    </div>
    )
}

export default Simulation;