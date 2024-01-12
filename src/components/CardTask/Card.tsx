import { FaTrash } from "react-icons/fa";
import { Input } from "../Input/Input";

type CardProps = {
  task: string;
  checked: boolean;
  onChange: () => void;
  onRemove: () => void;
};

export const Card = ({ task, checked, onChange, onRemove }: CardProps) => {
  return (
    <div className="card">
      <ul>
        <li>{task}</li>
      </ul>
      <div className="check-trash">
        <Input type="checkbox" checked={checked} onChange={onChange} />
        <div className="svg">
          <FaTrash onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};
