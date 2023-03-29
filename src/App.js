import "./styles.css";
import { motion } from "framer-motion";
import Input from "./Input";
import Radio from "./Radio";
import Radiogroup from "./Radiogroup";
import Checkbox from "./checkbox";

export default function App() {
  return (
    <div>
      <Input />
      <Checkbox />
      <label>
        <Radiogroup
          groupname="condiments"
          value={["ketchup", "mustard"]}
          defaultcheckedindex={0}
        />
      </label>
    </div>
  );
}
