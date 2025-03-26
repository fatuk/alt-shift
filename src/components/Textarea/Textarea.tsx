import {
  ChangeEvent,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from "react";
import cn from "classnames";

import typographyStyles from "styles/typography.module.css";
import styles from "./Textarea.module.css";

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
  label?: ReactNode;
  onChange?: (value: string) => void;
};

export const Textarea = ({
  label,
  maxLength,
  onChange = () => {},
  ...rest
}: Props) => {
  const [currentLength, setCurrentLength] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setCurrentLength(value.length);
    onChange(value);
  };

  const isInvalid = maxLength !== undefined && currentLength > maxLength;

  return (
    <label
      className={cn(styles.root, {
        [styles.invalid]: isInvalid,
      })}
    >
      {label ? (
        <span className={cn(typographyStyles.label2, styles.label)}>
          {label}
        </span>
      ) : null}
      <div className={styles.fieldWrapper}>
        <textarea
          className={cn(typographyStyles.input, styles.textarea)}
          onChange={handleChange}
          maxLength={maxLength ? maxLength + 1000 : undefined}
          {...rest}
        />
        {maxLength !== undefined ? (
          <div className={cn(typographyStyles.label2, styles.counter)}>
            {currentLength}/{maxLength}
          </div>
        ) : null}
      </div>
    </label>
  );
};
