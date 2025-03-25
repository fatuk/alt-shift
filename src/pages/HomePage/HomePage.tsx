import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import { Button } from "components/Button";
import { Layout } from "components/Layout";

import typography from "styles/typography.module.css";
import PlusIcon from "icons/plus.svg";

import { MainHeader } from "components/MainHeader";
import { Divider } from "components/Divider";
import { Jumbotron } from "components/Jumbotron";
import { useApplicationsStore } from "stores/useApplicationsStore";
import { ApplicationTile } from "components/ApplicationTile";

import styles from "./HomePage.module.css";
import { USER_GOAL_APPLICATION_COUNT } from "constants/settings";

export const HomePage = () => {
  const navigate = useNavigate();
  const { applications } = useApplicationsStore();

  const isJumbotronVisible = applications.length < USER_GOAL_APPLICATION_COUNT;

  return (
    <Layout align="top-left" isColumn isWide gap="32">
      <MainHeader />
      <Layout align="top-left" isColumn isWide gap="24">
        <Layout align="top-left" isColumn isWide>
          <Layout
            align="middle-left"
            justify="space-between"
            isWide
            padding="0 0 16 0"
          >
            <h1 className={typography.h1}>Applications</h1>
            <Button size="md" onClick={() => navigate("/new-application")}>
              <PlusIcon />
              Create New
            </Button>
          </Layout>
          <Divider />
        </Layout>
        <div className={styles.tiles}>
          {applications.map((application) => (
            <ApplicationTile key={nanoid()} application={application} />
          ))}
        </div>
      </Layout>
      {isJumbotronVisible ? <Jumbotron /> : null}
    </Layout>
  );
};
