import cn from "classnames";

import TrashIcon from "icons/trash.svg";
import CopyIcon from "icons/copy.svg";
import CheckIcon from "icons/check.svg";

import { Button } from "components/Button";

import { Application } from "stores/types/Application";
import typography from "styles/typography.module.css";

import styles from "./ApplicationTile.module.css";
import { useApplicationsStore } from "stores/useApplicationsStore";
import { useEffect, useState } from "react";

type Props = {
  application: Application;
};

const COPY_STATE_TIMEOUT = 5000;

export const ApplicationTile = ({ application }: Props) => {
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
    <div className={styles.root}>
      <div className={cn(styles.content, typography.text)}>
        {application.content}
      </div>
      <footer className={styles.footer}>
        <Button
          variant="text"
          onClick={() => removeApplication(application.id)}
        >
          <TrashIcon />
          Delete
        </Button>
        <Button variant="text" onClick={handleCopy}>
          {isCopied ? <CheckIcon /> : null}
          Copy to clipboard
          <CopyIcon />
        </Button>
      </footer>
    </div>
  );
};
