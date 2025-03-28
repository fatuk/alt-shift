import styles from "./Loader.module.css";
import LoaderImg from "./images/loader.svg";

export const Loader = () => {
  return (
    <div className={styles.root}>
      <img src={LoaderImg} alt="" width="320px" height="320px" />
    </div>
  );
};
