import { useEffect, useState } from "react";
import cn from "classnames";

import TrashIcon from "icons/trash.svg";
import CopyIcon from "icons/copy.svg";
import CheckIcon from "icons/check.svg";

import { Button } from "components/Button";

import { Application } from "stores/types/Application";
import { useApplicationsStore } from "stores/useApplicationsStore";
import typography from "styles/typography.module.css";

import styles from "./ApplicationPreview.module.css";
import { Loader } from "components/Loader";

type Props = {
  application: Application;
  isPending?: boolean;
  size?: "tile" | "full";
};

const COPY_STATE_TIMEOUT = 5000;

export const ApplicationPreview = ({
  application,
  isPending,
  size = "tile",
}: Props) => {
  const { removeApplication } = useApplicationsStore();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(application.content);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, COPY_STATE_TIMEOUT);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className={cn(styles.root, styles[size])}>
      {!isPending ? (
        <>
          <div
            className={cn(styles.content, typography.text, {
              [styles.hasClamp]: size === "tile",
            })}
          >
            {application.content}
          </div>
          <footer className={styles.footer}>
            <div className={styles.deleteBtn}>
              <Button
                variant="text"
                onClick={() => removeApplication(application.id)}
              >
                <TrashIcon />
                Delete
              </Button>
            </div>
            <Button variant="text" onClick={handleCopy}>
              {isCopied ? <CheckIcon /> : null}
              Copy to clipboard
              <CopyIcon />
            </Button>
          </footer>
        </>
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
