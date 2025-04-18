const Loading = ({ message = "Loading..." }: { message?: string }) => (
  <p
    style={{
      color: "blue",
      fontWeight: "bold",
      fontSize: "20px",
      textAlign: "center",
    }}
  >
    {message}
  </p>
);

export default Loading;
