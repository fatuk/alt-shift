import type { ComponentProps } from "react";

import omit from "lodash-es/omit";

import { Textarea } from "components/Textarea";
import { useFormField } from "hooks/useFormField";

type TextareaProps = ComponentProps<typeof Textarea>;

type Props = TextareaProps & {
  name: string;
};

export const TextareaField = ({ name, ...rest }: Props) => {
  const { field } = useFormField({ name, defaultValue: "" });

  return <Textarea {...field} {...omit(rest, "onChange")} />;
};
