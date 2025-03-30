import { MainHeader } from "components/MainHeader";
import {
  NewApplicationForm,
  NewApplicationFormValues,
} from "./elements/NewApplicationForm";
import { Layout } from "components/Layout";
import { ApplicationPreview } from "components/ApplicationPreview";
import { Jumbotron } from "components/Jumbotron";
import { useCoverLetterGenerator } from "hooks/api/useCoverLetterGenerator";
import { useState } from "react";

import styles from "./NewApplicationPage.module.css";

export const NewApplicationPage = () => {
  const [previewText, setPreviewText] = useState("");
  const { mutateAsync, isPending } = useCoverLetterGenerator();
  const handleSubmit = async (data: NewApplicationFormValues) => {
    setPreviewText("");
    const coverLetterPreview = await mutateAsync(data);
    setPreviewText(coverLetterPreview);
  };

  return (
    <Layout align="top-left" gap="32" isColumn>
      <MainHeader />
      <div className={styles.container}>
        <div className={styles.column}>
          <NewApplicationForm onSubmit={handleSubmit} isPending={isPending} />
        </div>
        <div className={styles.column}>
          <ApplicationPreview
            size="full"
            isPending={isPending}
            application={{
              id: "1",
              content:
                previewText ||
                "Your personalized job application will appear here...",
              createdAt: new Date().toISOString(),
            }}
          />
        </div>
      </div>
      <Jumbotron />
    </Layout>
  );
};
