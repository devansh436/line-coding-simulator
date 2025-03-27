import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Script from "../scripts/script.js";
import descriptions from "../scripts/data.js";

function Simulation() {
    const encodingType = localStorage.getItem("encodingType");
    const defaultBitStream = "10101110011";
    const [currBitStream, setCurrBitStream] = useState(defaultBitStream);
    const [validStream, setValidStream] = useState(true);

    useEffect(() => {
        const canvas = document.getElementById("canvasDiv");
        if (!canvas) return;
        Script.initCanvas(canvas);
        Script.updateUI(defaultBitStream);
    }, []);

    function handleSubmit(event, bitStreamValue = null) {
        event.preventDefault();
        const bitStream =
            bitStreamValue || document.getElementById("bitStream").value;
        setCurrBitStream(bitStream);
        if (Script.validate()) {
            Script.updateUI(bitStream);
            console.log("Form submitted.");
            setValidStream(true);
        } else {
            setValidStream(false);
        }
    }

    function clearField(event) {
        event.preventDefault();
        document.getElementById("bitStream").value = "";
        setCurrBitStream("");
        setValidStream(true);
    }

    function randomBitStream(event) {
        const randomStream = generateRandomBitStream();
        document.getElementById("bitStream").value = randomStream;
        setCurrBitStream(randomStream);
        handleSubmit(event, randomStream); // pass value directly to update immediately
    }

    function generateRandomBitStream() {
        return Array.from({ length: 11 }, () => Math.round(Math.random())).join(
            ""
        );
    }

    return (
        <div
            data-bs-theme="dark"
            className="bg-dark position-relative"
            style={{ backgroundColor: "#2E3945", height: "100%" }}
        >
            <Link to="/">
                <button
                    className="btn btn-sm btn-outline-dark btn-secondary text-light p-2 shadow-sm border-0"
                    style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                    }}
                >
                    ◀️ Back to Home
                </button>
            </Link>

            {/* Title Section */}
            <div
                id="title"
                className="pt-4 pb-2 text-center"
                style={{
                    background:
                        "linear-gradient(0deg, rgb(6, 58, 39), rgb(11, 160, 113))",
                }}
            >
                <h1 className="text-warning display-4">
                    {encodingType} Line Coding
                </h1>
                <p className="fw-light text-white fs-5">
                    Visualize the {encodingType} encoding technique in digital
                    communication
                </p>
            </div>

            {/* Form Section */}
            <form
                onSubmit={handleSubmit}
                className="container mt-5 px-4 py-3 rounded border"
                style={{ backgroundColor: "#1D2A38", borderColor: "#6C757D" }}
            >
                <label htmlFor="bitStream" className="text-info form-label">
                    Bitstream:
                </label>
                <input
                    type="text"
                    className="form-control text-white"
                    placeholder={`e.g. ${defaultBitStream}`}
                    id="bitStream"
                    autoComplete="off"
                    style={{
                        backgroundColor: "#3B4754",
                        borderColor: "#6C757D",
                    }}
                />

                <div className="d-flex mt-2">
                    <div className="d-flex flex-column w-100">
                        <div
                            className={`alert alert-danger py-2 ${
                                validStream ? "d-none" : ""
                            }`}
                        >
                            Invalid input.
                        </div>
                        <div className="d-flex gap-3">
                            <button
                                type="submit"
                                className="btn btn-outline-success btn-sm px-4 shadow-sm no-transition"
                                style={{
                                    borderRadius: "0.8rem",
                                    fontSize: "0.9rem",
                                    color: "#FFF",
                                }}
                            >
                                Simulate
                            </button>
                            <button
                                type="button"
                                onClick={randomBitStream}
                                className="btn btn-outline-danger btn-sm px-4 shadow-sm no-transition"
                                style={{
                                    borderRadius: "0.8rem",
                                    fontSize: "0.9rem",
                                    color: "#FFF",
                                }}
                            >
                                Random
                            </button>
                            <button
                                type="button"
                                onClick={clearField}
                                className="btn btn-outline-primary btn-sm px-4 shadow-sm no-transition"
                                style={{
                                    borderRadius: "0.8rem",
                                    fontSize: "0.9rem",
                                    color: "#FFF",
                                }}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {/* Canvas Section */}
            <div className="mt-5 d-flex justify-content-center">
                <canvas
                    id="canvasDiv"
                    className="p-3 border border-1 shadow-lg"
                    style={{
                        backgroundColor: "#F8F9FA",
                        width: "65vw",
                        height: "24vw",
                        borderRadius: "1rem",
                    }}
                ></canvas>
            </div>

            {/* Result Display */}
            <div className="text-center text-info mt-2 fs-6">
                Digitized signal for{" "}
                <span className="fw-bold">{currBitStream}</span>
            </div>

            {/* Description Section */}
            <div
                id="desc"
                className="card px-5 py-3 text-break text-white m-auto my-4"
                style={{
                    width: "80%",
                    backgroundColor: "#1D2A38",
                    borderRadius: "1rem",
                }}
                dangerouslySetInnerHTML={{ __html: descriptions[encodingType] }}
            ></div>
        </div>
    );
}

export default Simulation;
