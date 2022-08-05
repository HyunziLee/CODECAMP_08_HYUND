export default function Button01(props) {
  return (
    <button style={{ color: props.isActive ? "yellow" : "default" }}>
      {props.title}
    </button>
  );
}
