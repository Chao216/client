export default function TextBlock(props) {
  return (
    <div style={{ width: "40vw" }}>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
    </div>
  );
}
