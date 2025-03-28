import type { ComponentProps } from "react";

import omit from "lodash-es/omit";

import { Input } from "components/Input";
import { useFormField } from "hooks/useFormField";

type InputProps = ComponentProps<typeof Input>;

type Props = InputProps & {
  name: string;
};

export const InputField = ({ name, ...rest }: Props) => {
  const { field } = useFormField({ name, defaultValue: "" });

  return <Input {...field} {...omit(rest, "onChange")} />;
};
