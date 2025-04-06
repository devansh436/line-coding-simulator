import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Script from "../scripts/script.js";
import descriptions from "../scripts/descriptions.js";

import TitleSection from "../components/TitleSection.jsx";
import BitStreamForm from "../components/BitStreamForm.jsx";
import CanvasDisplay from "../components/CanvasDisplay.jsx";
import ResultDisplay from "../components/ResultDisplay.jsx";
import DescriptionCard from "../components/DescriptionCard.jsx";
import DetailBox from "../components/DetailBox.jsx";

function Simulation() {
  // ------------------------ VARIABLES, STATES -------------------
  const encodingType = localStorage.getItem("encodingType") || "NRZ-L";
  const defaultBitStream = "10101110011";

  const [bitStream, setBitStream] = useState(defaultBitStream);
  const [validStream, setValidStream] = useState(true);

  useEffect(() => {
    const canvas = document.getElementById("canvasDiv");
    if (!canvas) return;
    Script.initCanvas(canvas);
    Script.updateUI(defaultBitStream);
  }, []);

  // ---------------- FUNCTIONS ---------------
  function handleSubmit(event, bitStreamValue = null) {
    event.preventDefault();
    const bitStream =
      bitStreamValue || document.getElementById("bitStream").value;
    setBitStream(bitStream);
    if (Script.validate()) {
      Script.updateUI(bitStream);
      setValidStream(true);
    } else {
      setValidStream(false);
    }
  }

  function clearField(event) {
    event.preventDefault();
    document.getElementById("bitStream").value = "";
    setBitStream("");
    setValidStream(true);
  }

  function randomBitStream(event) {
    const randomStream = generateRandomBitStream();
    document.getElementById("bitStream").value = randomStream;
    setBitStream(randomStream);
    handleSubmit(event, randomStream);
  }

  function generateRandomBitStream() {
    return Array.from({ length: 11 }, () => Math.round(Math.random())).join("");
  }

  // ------------------  COMPONENT -----------------
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

      <TitleSection encodingType={encodingType} />

      <div className="d-flex flex-row justify-content-evenly" style={{ minHeight: 'auto' }}>
        <BitStreamForm
          defaultBitStream={defaultBitStream}
          validStream={validStream}
          handleSubmit={handleSubmit}
          clearField={clearField}
          randomBitStream={randomBitStream}
        />

        <DetailBox encodingType={encodingType} bitStream={bitStream}/>
      </div>

      <CanvasDisplay />

      <ResultDisplay bitStream={bitStream} />

      <DescriptionCard htmlContent={descriptions[encodingType]} />
    </div>
  );
}

export default Simulation;
