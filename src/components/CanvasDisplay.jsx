function CanvasDisplay() {
    return (
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
    );
  }
  
  export default CanvasDisplay;
  