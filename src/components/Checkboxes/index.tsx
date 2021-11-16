import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./styles.module.scss";

type Option = {
  value: string;
  label: string;
};

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  options: Option[];
  stateFunction: (state: string[]) => void;
  state?: string[];
};

export const Checkboxes = ({ state = [], options, stateFunction, ...rest }: InputProps) => {
  const [checkboxState, setCheckboxState] = useState<string[]>(state);

  const handleCheckboxesState = (option: Option) => {
    let newCheckboxState;

    if (checkboxState.includes(option.value)) {
      newCheckboxState = checkboxState.filter((value) => value !== option.value);
    } else {
      newCheckboxState = [...checkboxState, option.value];
    }

    setCheckboxState(newCheckboxState);
    stateFunction(newCheckboxState);
  };

  return (
    <>
      {options.map((option) => (
        <div key={option.value} className={styles.Checkbox}>
          <input
            {...rest}
            type='checkbox'
            value={option.value}
            id={option.value}
            checked={checkboxState.includes(option.value)}
          />
          <div
            className={styles.Checkbox__component}
            onClick={() => handleCheckboxesState(option)}
          />
          <label onClick={() => handleCheckboxesState(option)}>{option.label}</label>
        </div>
      ))}
    </>
  );
};
