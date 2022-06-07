export default function Logo(props) {
  return (
    <img
      style={{ marginBottom: "15%" }}
      className="logo"
      src={props.path}
      alt={props.alt}
    />
  );
}
