import "./styles.css";

export default function Checkbox(props) {
  const {
    name = "group",
    value = "Remember me",
    defaultchecked = false
  } = props;

  return (
    <div>
      <label>{value}</label>
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultchecked}
      />
    </div>
  );
}
