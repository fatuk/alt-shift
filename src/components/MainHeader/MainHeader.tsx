import { Layout } from "components/Layout";
import { Button } from "components/Button";

import logo from "./images/logo.svg";
import HomeIcon from "icons/home.svg";
import { CounterSmall } from "components/CounterSmall";

export const MainHeader = () => {
  return (
    <Layout align="middle-left" isWide justify="space-between">
      <img src={logo} alt="Logo" />
      <Layout align="middle-left" gap="24">
        <CounterSmall currentCount={3} />
        <Button variant="icon">
          <HomeIcon />
        </Button>
      </Layout>
    </Layout>
  );
};
