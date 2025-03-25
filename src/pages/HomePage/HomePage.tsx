import { Button } from "components/Button";
import { Layout } from "components/Layout";

import typography from "styles/typography.module.css";
import PlusIcon from "icons/plus.svg";
import RepeatIcon from "icons/repeat.svg";
import CopyIcon from "icons/copy.svg";
import HomeIcon from "icons/home.svg";

import { MainHeader } from "components/MainHeader";
import { useNavigate } from "react-router-dom";
import { Divider } from "components/Divider";
import { Jumbotron } from "components/Jumbotron";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout align="top-left" isColumn isWide gap="32">
      <MainHeader />
      <Layout align="top-left" isColumn isWide>
        <Layout
          align="top-left"
          isWide
          justify="space-between"
          padding="0 0 16 0"
        >
          <div className={typography.h1}>Applications</div>
          <Button size="md" onClick={() => navigate("/new-application")}>
            <PlusIcon />
            Create New
          </Button>
        </Layout>
        <Divider />
      </Layout>
      <Jumbotron />
    </Layout>
  );
};
