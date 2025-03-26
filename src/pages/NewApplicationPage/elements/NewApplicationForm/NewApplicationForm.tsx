import { Input } from "components/Input";
import styles from "./NewApplicationForm.module.css";
import { Textarea } from "components/Textarea";

type Props = {};

export const NewApplicationForm = ({}: Props) => {
  return (
    <form>
      <Input
        label="Job title"
        placeholder="Product manager"
        required
        value="qwe"
      />
      <Textarea
        label="Additional details"
        placeholder="Describe why you are a great fit or paste your bio"
        maxLength={1200}
        rows={10}
      />
    </form>
  );
};
