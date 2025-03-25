import TrashIcon from "icons/trash.svg";
import cn from "classnames";

import typography from "styles/typography.module.css";

export const HomePage = () => {
  return (
    <div>
      <h1 className={cn(typography.h1)}>HomePage</h1>
      <TrashIcon />
    </div>
  );
};
