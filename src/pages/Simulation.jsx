import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as Script from "../scripts/script.js";
import  descriptions  from '../scripts/data.js';

function Simulation() {
    const encodingType = localStorage.getItem('encodingType');

    useEffect(() =>  {
        const canvas = document.getElementById('canvasDiv');
        if (!canvas) return;
        Script.initCanvas(canvas);
        Script.drawAxes();
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        if (Script.validate(event) && Script.updateUI(event)) {
            console.log("Form submitted.");
        }
    }
    
    function generateRandomBitStream() {
        return Array.from({ length: 10 }, () => Math.round(Math.random())).join('');
    }      

    function randomBitStream(event) {
        event.preventDefault();
        let inputField = document.getElementById('bitStream');
        inputField.value = generateRandomBitStream();
        handleSubmit(event);
    }


    return (
    <div data-bs-theme="dark" className="bg-dark" style={{height: "100vh"}}>
        <Link to='/'>
        <button className='btn btn-sm btn-outline-secondary m-3'>◀️Back to Home</button>
        </Link>
        <h1 className="text-center text-white p-3">{encodingType} Line Coding</h1>

        <form action="" onSubmit={handleSubmit} className="container mt-4 p-4 rounded border">
            <label htmlFor="bitStream" className="text-white form-label">Bitstream:</label>
            <div className="d-flex gap-2">
                <input type="text"  className="form-control" placeholder="e.g. 101000" id="bitStream" autoComplete="off"/>
                <button type="submit"  className="btn border border-1 btn-success">Simulate</button>
                <button type="submit"  onClick={randomBitStream} className="btn border border-1 btn-danger">Random</button>
            </div>
        </form>

        <div className="mt-5 d-flex justify-content-center">
            <canvas id="canvasDiv" className="p-3 bg-light border border-1" width="1000" height="400"></canvas>
        </div>
        <div className="text-center text-white mt-2 fs-6 bg-dark">Digitized bitstream</div>
        <div id="desc" className="px-5 py-3 text-break text-white bg-dark" dangerouslySetInnerHTML={{__html: descriptions[encodingType]}}></div>
    </div>
    )
}

export default Simulation;