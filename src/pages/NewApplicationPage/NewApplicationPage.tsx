import { MainHeader } from "components/MainHeader";
import { useApplicationsStore } from "stores/useApplicationsStore";
import {
  NewApplicationForm,
  NewApplicationFormValues,
} from "./elements/NewApplicationForm";
import { Layout } from "components/Layout";
import { ApplicationPreview } from "components/ApplicationPreview";
import { Jumbotron } from "components/Jumbotron";

export const NewApplicationPage = () => {
  const { addApplication } = useApplicationsStore();

  const handleSubmit = (data: NewApplicationFormValues) => {
    console.log(data);
  };

  return (
    <Layout align="top-left" gap="32" isColumn>
      <MainHeader />
      <Layout align="top-left" isWide gap="32">
        <Layout align="top-left" isWide>
          <NewApplicationForm onSubmit={handleSubmit} />
        </Layout>
        <Layout align="top-left" isWide hasFullHeight>
          <ApplicationPreview
            size="full"
            application={{
              id: "1",
              content: "Hello world!",
              createdAt: new Date().toISOString(),
            }}
          />
        </Layout>
      </Layout>
      <Jumbotron />
    </Layout>
  );
};
