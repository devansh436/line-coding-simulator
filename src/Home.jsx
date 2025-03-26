import { Link } from "react-router-dom";

function Home() {
  const setEncodingType = (element) => {
    localStorage.setItem('encodingType', element.target.id);
  }

  const gradients = [
    "linear-gradient(145deg, rgb(6, 58, 39), rgb(11, 160, 113))",
    "linear-gradient(145deg, rgb(4, 20, 53), rgb(11, 62, 123))",
    "linear-gradient(145deg, rgb(20, 20, 50), rgb(60, 60, 150))",
    "linear-gradient(145deg, rgb(30, 60, 30), rgb(70, 160, 90))",
    "linear-gradient(145deg, rgb(80, 20, 20), rgb(180, 50, 50))",
    "linear-gradient(145deg, rgb(110, 80, 20), rgb(240, 180, 60))"
  ];

  return (
    <div data-bs-theme="dark" className="bg-dark pb-4" style={{ width: "99vw", height: "100%" }}>
      {/* Title Section */}
      <div id="title" className="pt-4 pb-2 text-center" style={{ background: "linear-gradient(0deg,rgb(6, 58, 39),rgb(11, 160, 113))" }}>
        <h1 className="text-warning display-4">Line Coding Schemes Simulation</h1>
        <p className="fw-light text-white fs-5">Explore various encoding techniques used in digital communication</p>
      </div>

      {/* Introduction Card */}
      <div className="container mt-5">
        <div className="card p-4 border-0 shadow-lg" style={{ background: "linear-gradient(0deg,rgb(4, 20, 53),rgb(11, 62, 123))", color: "#fff" }}>
          <div className="text-center text-warning mb-4 fs-2 fw-light">Introduction to Line Encoding</div>
          <p>
            Line encoding schemes are methods used to represent digital data using specific voltage patterns for transmission. They ensure
            reliable data transfer, synchronization, and error detection. Common types include <b>Unipolar</b>, <b>Polar</b>, <b>Bipolar</b>, and <b>Manchester</b> encoding.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent border-secondary text-light"><b>Purpose:</b> Converts digital data into signals for transmission.</li>
            <li className="list-group-item bg-transparent border-secondary text-light"><b>Types:</b> Unipolar, Polar, Bipolar, and Manchester encoding.</li>
            <li className="list-group-item bg-transparent border-secondary text-light"><b>Synchronization:</b> Manchester encoding aids in clock recovery.</li>
            <li className="list-group-item bg-transparent border-secondary text-light"><b>DC Component:</b> Bipolar encoding minimizes DC bias.</li>
            <li className="list-group-item bg-transparent border-secondary text-light"><b>Error Detection:</b> Certain schemes improve error detection.</li>
            <li className="list-group-item bg-transparent border-secondary text-light"><b>Bandwidth Usage:</b> Manchester encoding requires more bandwidth.</li>
          </ul>
        </div>
      </div>

      {/* Explore Section */}
      <div className="text-light text-center mt-5 fs-2 fw-bold">Explore Encoding Techniques</div>
      <div className="mt-4 d-flex gap-4 justify-content-center flex-wrap">
        {["NRZ-I", "NRZ-L", "RZ", "Manchester", "AMI", "MLT-3"].map((type, index) => (
          <Link key={type}
            id={type}
            className="btn btn-lg px-5 py-3 fw-semibold text-white border-0"
            to="/simulation"
            onClick={setEncodingType}
            style={{ background: gradients[index], boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)" }}
          >
            {type}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;