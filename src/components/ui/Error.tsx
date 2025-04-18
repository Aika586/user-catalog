const Error = ({ error }: { error: Error | null }) => (
  <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
    {error?.message || "Something went wrong"}
  </p>
);

export default Error;
