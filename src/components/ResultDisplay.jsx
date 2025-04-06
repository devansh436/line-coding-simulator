function ResultDisplay({ bitStream }) {
    return (
      <div className="text-center text-info mt-2 fs-6">
        Digitized signal for <span className="fw-bold">{bitStream}</span>
      </div>
    );
  }
  
  export default ResultDisplay;
  