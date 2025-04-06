import encodingDetails from "../scripts/details";

function DetailBox({ encodingType, bitStream }) {
  const details = encodingDetails[encodingType] || {
    sync: "Unknown",
    dc: "Unknown",
    baseline: "Unknown",
  };

  return (
    <div
      className="mt-5 px-4 py-3 rounded border shadow-sm"
      style={{
        backgroundColor: "#1D2A38",
        borderColor: "#6C757D",
        width: "40vw",
        borderRadius: "0.8rem",
      }}
    >
      <div className="text-info mb-3 text-center fs-5 fw-semibold">Signal Characteristics</div>

      <div className="mb-2 text-light">
        <strong><u>Synchronization:</u></strong> {details.sync}
      </div>

      <div className="mb-2 text-light">
        <strong><u>DC Component:</u></strong> {details.dc}
      </div>

      <div className="mb-2 text-light">
        <strong><u>Baseline Wandering:</u></strong> {details.baseline}
      </div>
    </div>
  );
}

export default DetailBox;
