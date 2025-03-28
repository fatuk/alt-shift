import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  UseFormReturn,
} from "react-hook-form";
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useRef,
} from "react";

import styles from "./Form.module.css";

type Props<T extends FieldValues = FieldValues> = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onSubmit" | "style"
> & {
  methods: UseFormReturn<T>;
  onSubmit: (formData: T) => void;
  onSubmitError?: SubmitErrorHandler<T>;
};

export const Form = <T extends FieldValues = FieldValues>({
  children,
  methods,
  onSubmit,
  onSubmitError,
  ...htmlProps
}: PropsWithChildren<Props<T>>) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      noValidate
      ref={formRef}
      onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}
      className={styles.root}
      {...htmlProps}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </form>
  );
};
