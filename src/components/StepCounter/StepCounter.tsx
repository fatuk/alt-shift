import cn from "classnames";

import typography from "styles/typography.module.css";
import CheckIcon from "icons/check.svg";

import styles from "./StepCounter.module.css";
import { USER_GOAL_APPLICATION_COUNT } from "constants/settings";

type Props = {
  maxCount?: number;
  currentCount: number;
  size?: "sm" | "md";
};

export const StepCounter = ({
  maxCount = USER_GOAL_APPLICATION_COUNT,
  currentCount,
  size = "sm",
}: Props) => {
  const label = {
    sm: `${currentCount}/${maxCount} applications generated`,
    md: `${currentCount} out of ${maxCount}`,
  };
  return (
    <div className={cn(styles.root, styles[size])}>
      <div className={cn(typography.label1, styles.label)}>{label[size]}</div>
      {currentCount < maxCount ? (
        <div className={styles.dots}>
          {Array.from({ length: maxCount }, (_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${
                i < currentCount ? styles.dotFilled : ""
              }`}
            />
          ))}
        </div>
      ) : (
        <div className={styles.check}>
          <CheckIcon />
        </div>
      )}
    </div>
  );
};
