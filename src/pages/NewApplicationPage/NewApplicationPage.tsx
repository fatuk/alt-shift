import { Button } from "components/Button";
import { Layout } from "components/Layout";
import PlusIcon from "icons/plus.svg";

import { MainHeader } from "components/MainHeader";
import { useApplicationsStore } from "stores/useApplicationsStore";

export const NewApplicationPage = () => {
  const { addApplication } = useApplicationsStore();

  return (
    <div>
      <MainHeader />
      New application page
      <Layout align="top-left" padding="20 20 20 20" gap="20">
        <Button size="md" onClick={() => addApplication("New item1")}>
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
    </div>
  );
};
