function DescriptionCard({ htmlContent }) {
  return (
    <div
      id="desc"
      className="card px-5 py-3 text-break text-white m-auto my-4"
      style={{
        width: "80%",
        backgroundColor: "#1D2A38",
        borderRadius: "1rem",
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
}

export default DescriptionCard;
