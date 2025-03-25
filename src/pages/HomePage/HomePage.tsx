import { Button } from "components/Button";
import { Layout } from "components/Layout";
import PlusIcon from "icons/plus.svg";
import RepeatIcon from "icons/repeat.svg";
import CopyIcon from "icons/copy.svg";
import HomeIcon from "icons/home.svg";

import { MainHeader } from "components/MainHeader";

export const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <Layout align="top-left" padding="20 20 20 20" gap="20">
        <Button size="md">
          <PlusIcon />
          Create New
        </Button>
        <Button size="md" disabled>
          <PlusIcon />
          Create New
        </Button>
        <Button size="lg">
          <PlusIcon />
          Create New
        </Button>
      </Layout>
      <Layout align="top-left" padding="20 20 20 20" gap="20" isColumn>
        <Button variant="secondary" size="lg" isWide>
          <RepeatIcon />
          Try Again
        </Button>
        <Button variant="secondary" size="lg" isWide disabled>
          <RepeatIcon />
          Try Again
        </Button>
        <Button variant="text">
          Copy to clipboard
          <CopyIcon />
        </Button>
        <Button variant="text" disabled>
          Copy to clipboard
          <CopyIcon />
        </Button>
        <Button variant="icon">
          <HomeIcon />
        </Button>
      </Layout>
    </div>
  );
};
