function TitleSection({ encodingType }) {
  return (
    <div
      id="title"
      className="pt-4 pb-2 text-center"
      style={{
        background: "linear-gradient(0deg, rgb(6, 58, 39), rgb(11, 160, 113))",
      }}
    >
      <h1 className="text-warning display-4">{encodingType} Line Coding</h1>
      <p className="fw-light text-white fs-5">
        Visualize the {encodingType} encoding technique in digital communication
      </p>
    </div>
  );
}

export default TitleSection;