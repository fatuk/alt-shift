import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

import LoadingIcon from "icons/loading.svg";
import typography from "styles/typography.module.css";

import styles from "./Button.module.css";

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
> & {
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "text" | "icon";
  isWide?: boolean;
  isPending?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  isPending,
  isWide = false,
  onClick,
  ...rest
}: Props) => {
  const classNames = cn(styles.root, styles[size], styles[variant], {
    [styles.isWide]: isWide,
    [typography.button1]: size === "lg",
    [typography.button2]: size === "md",
  });

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {isPending ? (
        <div className={styles.loader}>
          <LoadingIcon />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
