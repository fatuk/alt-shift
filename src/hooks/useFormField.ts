import isString from "lodash-es/isString";
import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

export function useFormField<
  T extends FieldValues = FieldValues,
  FieldName extends FieldPath<T> = FieldPath<T>
>({
  name,
  defaultValue,
}: {
  name: FieldName;
  defaultValue?: FieldPathValue<T, FieldName>;
}) {
  const {
    control,
    formState: { errors: formErrors },
  } = useFormContext();

  const { field } = useController<T>({
    name,
    control: control as Control<T>,
    defaultValue,
  });

  const getErrors = () => {
    const fieldErrors = formErrors[name];
    if (Array.isArray(fieldErrors)) {
      return fieldErrors.map((f) => f.value?.message as string);
    }

    if (fieldErrors?.message && isString(fieldErrors.message)) {
      return [fieldErrors.message];
    }

    return undefined;
  };

  const errors = getErrors();

  return { field, errors };
}
