import { SkeletonProps } from "react-loading-skeleton";

export type TSkeletonComponent = Omit<
  SkeletonProps,
  "baseColor" | "highlightColor"
>;
