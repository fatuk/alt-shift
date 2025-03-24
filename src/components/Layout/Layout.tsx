import cn from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Layout.module.css";

type Align =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "middle-left"
  | "middle-right"
  | "center";

type Padding = `${number} ${number} ${number} ${number}`;

export type Props = Omit<
  HTMLAttributes<HTMLDivElement>,
  "style" | "className"
> & {
  children: ReactNode;
  align: Align;
  gap?: string;
  hasEllipsis?: boolean;
  hasNoShrink?: boolean;
  hasGrow?: boolean;
  hasWrap?: boolean;
  hasFullHeight?: boolean;
  justify?: "space-between";
  isColumn?: boolean;
  isWide?: boolean;
  padding?: Padding;
};

export const Layout = ({
  children,
  align,
  gap,
  hasEllipsis,
  hasNoShrink,
  hasGrow,
  hasWrap,
  hasFullHeight,
  justify,
  isColumn,
  isWide,
  padding,
  ...rest
}: Props) => {
  const normalizedPadding = padding
    ?.split(" ")
    .map((num) => num + "px")
    .join(" ");
  const normalizedGap = gap ? gap + "px" : undefined;

  const rootClasses = cn(styles.root, {
    [styles.hasEllipsis]: hasEllipsis,
    [styles.hasNoShrink]: hasNoShrink,
    [styles.hasGrow]: hasGrow,
    [styles.hasWrap]: hasWrap,
    [styles.hasFullHeight]: hasFullHeight,
    [styles.isColumn]: isColumn,
    [styles.isWide]: isWide,
    [styles.spaceBetween]: justify === "space-between",
    [styles.topLeft]: align === "top-left",
    [styles.middleLeft]: align === "middle-left",
    [styles.bottomLeft]: align === "bottom-left",
    [styles.topCenter]: align === "top-center",
    [styles.сenter]: align === "center",
    [styles.bottomCenter]: align === "bottom-center",
    [styles.topRight]: align === "top-right",
    [styles.middleRight]: align === "middle-right",
    [styles.bottomRight]: align === "bottom-right",
  });

  return (
    <div
      style={{ padding: normalizedPadding, gap: normalizedGap }}
      className={rootClasses}
      {...rest}
    >
      {children}
    </div>
  );
};
