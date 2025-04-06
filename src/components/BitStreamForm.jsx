function BitStreamForm({
  defaultBitStream,
  validStream,
  handleSubmit,
  randomBitStream,
  clearField,
}) {
  return (
    <div
      className="mt-5 px-4 py-3 rounded border"
      style={{
        backgroundColor: "#1D2A38",
        borderColor: "#6C757D",
        width: "40vw",
        height: "23vh",
        minHeight:"175px"
      }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="bitStream" className="text-info form-label fs-5 fw-semibold w-100 text-center mb-3">
          Bitstream
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
            {/* invalid input alert */}
            <div
              className={`alert alert-danger py-2 ${
                validStream ? "d-none" : ""
              }`}
            >Invalid input.
            </div>

            {/* Submit Buttons */}
            <div className="d-flex gap-3 mt-2 ">
              {/* Simulate */}
              <button
                type="submit"
                className="btn btn-outline-success btn-sm px-4 py-2 shadow-sm no-transition"
                style={{
                  borderRadius: "0.8rem",
                  fontSize: "0.9rem",
                  color: "#FFF",
                }}
              >
                Simulate
              </button>

              {/* Random */}
              <button
                type="button"
                onClick={randomBitStream}
                className="btn btn-outline-danger py-2 btn-sm px-4 shadow-sm no-transition"
                style={{
                  borderRadius: "0.8rem",
                  fontSize: "0.9rem",
                  color: "#FFF",
                }}
              >
                Random
              </button>

              {/* Clear */}
              <button
                type="button"
                onClick={clearField}
                className="btn btn-outline-primary py-2 btn-sm px-4 shadow-sm no-transition"
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
    </div>
  );
}

export default BitStreamForm;
