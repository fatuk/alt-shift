import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

import typographyStyles from "styles/typography.module.css";
import styles from "./Input.module.css";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  label?: ReactNode;
  onChange?: (value: string) => void;
};

export const Input = ({ label, onChange = () => {}, ...rest }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  return (
    <label className={styles.root}>
      {label ? (
        <span className={cn(typographyStyles.label2, styles.label)}>
          {label}
        </span>
      ) : null}
      <input
        className={cn(typographyStyles.input, styles.input)}
        onChange={handleChange}
        {...rest}
      />
    </label>
  );
};
