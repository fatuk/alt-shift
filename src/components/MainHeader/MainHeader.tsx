import { useNavigate } from "react-router-dom";

import { Layout } from "components/Layout";
import { Button } from "components/Button";
import { StepCounter } from "components/StepCounter";
import HomeIcon from "icons/home.svg";

import { useApplicationsStore } from "stores/useApplicationsStore";

import logo from "./images/logo.svg";

export const MainHeader = () => {
  const { applications } = useApplicationsStore();
  const navigate = useNavigate();

  return (
    <Layout align="middle-left" isWide justify="space-between">
      <img src={logo} alt="Logo" />
      <Layout align="middle-left" gap="24">
        <StepCounter currentCount={applications.length} />
        <Button variant="icon" onClick={() => navigate("/")}>
          <HomeIcon />
        </Button>
      </Layout>
    </Layout>
  );
};
