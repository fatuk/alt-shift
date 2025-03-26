import { Button } from "components/Button";
import { Layout } from "components/Layout";
import PlusIcon from "icons/plus.svg";

import { MainHeader } from "components/MainHeader";
import { useApplicationsStore } from "stores/useApplicationsStore";
import { NewApplicationForm } from "./elements/NewApplicationForm";

export const NewApplicationPage = () => {
  const { addApplication } = useApplicationsStore();

  return (
    <div>
      <MainHeader />
      <NewApplicationForm />
    </div>
  );
};
