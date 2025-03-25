import { Link } from "react-router-dom";

function Home() {
  const setEncodingType = (element) => {
    localStorage.setItem('encodingType', element.target.id);
  }

  return (
    <div data-bs-theme="dark" className="bg-dark" style={{ height: "100vh" }}>
      <div
        id="title"
        className="pt-4 pb-2 bg-success text-white fw-bold text-center"
      >
        <h1 className="text-warning">Line Coding Schemes Simulation</h1>
        <p className="fw-lighter">
          Explore various encoding techniques used in digital communication
        </p>
      </div>

      <div className="container mt-5">
        <div className="card p-4 border border-2 shadow-lg">
          <h2 className="text-center text-warning mb-3">
            Introduction to Line Encoding
          </h2>
          <p>
            Line encoding schemes are methods used to represent digital data
            using specific voltage patterns for transmission. They ensure
            reliable data transfer, synchronization, and error detection. Common
            types include <b>Unipolar</b>, <b>Polar</b>, <b>Bipolar</b>, and{" "}
            <b>Manchester</b> encoding. Each has its pros and cons regarding
            bandwidth usage, complexity, and error resilience.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Purpose:</b> Converts digital data into signals for
              transmission.
            </li>
            <li className="list-group-item">
              <b>Types:</b> Unipolar uses a single voltage, Polar uses two
              voltages, Bipolar uses alternating patterns, and Manchester
              ensures clock synchronization.
            </li>
            <li className="list-group-item">
              <b>Synchronization:</b> Manchester encoding aids in clock
              recovery.
            </li>
            <li className="list-group-item">
              <b>DC Component:</b> Bipolar encoding minimizes DC bias.
            </li>
            <li className="list-group-item">
              <b>Error Detection:</b> Certain schemes improve error detection.
            </li>
            <li className="list-group-item">
              <b>Bandwidth Usage:</b> Manchester encoding requires more
              bandwidth due to frequent transitions.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-light text-center mt-5 fs-3 fw-bold">
        Explore Encoding Techniques
      </div>
      <div className="mt-4  d-flex gap-4 justify-content-center">
        <Link id="NRZ" className="btn btn-outline-primary btn-lg shadow-sm" to="/simulation" onClick={setEncodingType} >
          NRZ
        </Link>
        <Link id="Manchester" className="btn btn-outline-success btn-lg shadow-sm" to="/simulation" onClick={setEncodingType} >
          Manchester
        </Link>
        <Link id="AMI" className="btn btn-outline-danger btn-lg shadow-sm" to="/simulation" onClick={setEncodingType} >
          AMI
        </Link>
        <Link id="MLT-3" className="btn btn-outline-warning btn-lg shadow-sm" to="/simulation" onClick={setEncodingType} >
          MLT-3
        </Link>
      </div>
    </div>
  );
}

export default Home;
