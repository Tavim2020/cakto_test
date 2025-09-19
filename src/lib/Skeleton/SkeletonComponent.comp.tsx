import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TSkeletonComponent } from ".";

export const SkeletonComponent = (props: TSkeletonComponent) => {
  return (
    <Skeleton
      {...props}
      highlightColor="oklch(0.98 0.02 142)"
      baseColor="oklch(0.9 0 0)"
    />
  );
};
