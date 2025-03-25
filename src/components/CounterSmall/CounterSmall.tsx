import typography from "styles/typography.module.css";
import styles from "./CounterSmall.module.css";

type Props = {
  maxCount?: number;
  currentCount: number;
};

export const CounterSmall = ({ maxCount = 5, currentCount }: Props) => {
  return (
    <div className={styles.root}>
      <div className={typography.label1}>
        {currentCount}/{maxCount} applications generated
      </div>
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
    </div>
  );
};
