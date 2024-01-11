import { ChangeEvent } from "react";
import "./Input.css";

type InputProps = {
  type: string;
  name?: string;
  placeholder?: string;
  id: string;
  value?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  name,
  placeholder,
  id,
  value,
  onSubmit,
  onChange,
}: InputProps) => {
  return (
    <section className="container-input">
      <form onSubmit={onSubmit}>
        <label htmlFor={id}>{name}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </form>
    </section>
  );
};
