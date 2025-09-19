import { SkeletonComponent } from "@/lib/Skeleton";

export const InstallmentInfoSkeleton = () => {
  return (
    <div className="flex items-center justify-center bg-muted/30 p-2 rounded">
      <SkeletonComponent width={200} height={16} />
    </div>
  );
};
