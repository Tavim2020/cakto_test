import { SkeletonComponent } from "@/lib/Skeleton";

export const FeeSkeleton = () => {
  return (
    <div className="flex justify-between">
      <SkeletonComponent width={80} height={20} />

      <SkeletonComponent width={80} height={20} />
    </div>
  );
};
