import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";

import { Form, InputField, TextareaField } from "components/Form";
import { Layout } from "components/Layout";
import { Button } from "components/Button";
import { Divider } from "components/Divider";

import RepeatIcon from "icons/repeat.svg";

import typography from "styles/typography.module.css";
import { NewApplicationFormValues, formValidator } from "./formValidator";

import styles from "./NewApplicationForm.module.css";

type Props = {
  isPending?: boolean;
  onSubmit: (data: NewApplicationFormValues) => void;
};

export const NewApplicationForm = ({ isPending, onSubmit }: Props) => {
  const formMethods = useForm<NewApplicationFormValues>({
    resolver: zodResolver(formValidator),
  });
  const { formState, watch } = formMethods;
  const { jobTitle, company } = watch();

  const isTitleFilled = jobTitle && company;
  const formTitle = isTitleFilled
    ? `${jobTitle}, ${company}`
    : "New application";

  return (
    <Form methods={formMethods} onSubmit={onSubmit}>
      <Layout align="top-left" isColumn gap="16" isWide>
        <Layout align="top-left" gap="6" isColumn isWide>
          <h1
            className={cn(typography.h1, styles.title, {
              [styles.isFilled]: isTitleFilled,
            })}
          >
            {formTitle}
          </h1>
          <Divider />
        </Layout>
        <Layout align="top-left" gap="16" isWide>
          <InputField
            name="jobTitle"
            label="Job title"
            placeholder="Product manager"
            required
          />
          <InputField
            name="company"
            label="Company"
            placeholder="Apple"
            required
          />
        </Layout>
        <InputField
          name="goodAt"
          label="I am good at..."
          placeholder="HTML, CSS and doing things in time"
          required
        />
        <TextareaField
          name="details"
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
          maxLength={1200}
          rows={10}
        />
        <Button
          isPending={isPending}
          variant={formState.isSubmitted ? "secondary" : "primary"}
          isWide
          size="lg"
          disabled={!formState.isValid || isPending}
        >
          {formState.isSubmitted ? (
            <>
              <RepeatIcon /> Try Again
            </>
          ) : (
            "Generate Now"
          )}
        </Button>
      </Layout>
    </Form>
  );
};
