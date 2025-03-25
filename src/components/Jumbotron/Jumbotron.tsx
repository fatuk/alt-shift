import cn from "classnames";

import typography from "styles/typography.module.css";
import PlusIcon from "icons/plus.svg";

import styles from "./Jumbotron.module.css";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { StepCounter } from "components/StepCounter";
import { useApplicationsStore } from "stores/useApplicationsStore";
import { Layout } from "components/Layout";

export const Jumbotron = () => {
  const navigate = useNavigate();
  const { applications } = useApplicationsStore();

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Layout align="center" isColumn isWide gap="16">
          <h2 className={cn(typography.h2, styles.title)}>Hit your goal</h2>
          <p className={cn(typography.text, styles.text)}>
            Generate and send out couple more job applications <br /> today to
            get hired faster
          </p>
          <Button size="lg" onClick={() => navigate("/new-application")}>
            <PlusIcon />
            Create New
          </Button>
        </Layout>
        <StepCounter currentCount={applications.length} size="md" />
      </div>
    </div>
  );
};
