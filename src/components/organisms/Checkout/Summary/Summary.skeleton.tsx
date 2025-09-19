import { SkeletonComponent } from "@/lib/Skeleton";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import { Separator } from "@/lib/ui/separator";

export const SummarySkeleton = () => {
  return (
    <Card className="shadow-lg min-w-full">
      <CardHeader className="bg-muted/30">
        <div className="w-40.75">
          <SkeletonComponent height={20} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="flex flex-col gap-4">
          <div className="w-25">
            <SkeletonComponent height={20} />
          </div>

          <div className="flex flex-col bg-muted/20 rounded-lg">
            <div className="w-20 self-end">
              <SkeletonComponent height={14} />
            </div>

            <div className="flex items-center justify-between gap-6">
              <SkeletonComponent width={200} height={16} />

              <SkeletonComponent width={100} height={18} />
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between">
          <SkeletonComponent width={60} height={20} />

          <SkeletonComponent width={100} height={20} />
        </div>

        <div className="flex justify-between">
          <SkeletonComponent width={140} height={20} />

          <SkeletonComponent width={100} height={20} />
        </div>

        <Separator />

        <div className="flex justify-between">
          <SkeletonComponent width={50} height={20} />

          <SkeletonComponent width={120} height={20} />
        </div>

        <Separator />

        <div className="pt-4 border-t">
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <SkeletonComponent width={15} height={14} />
              <SkeletonComponent width={80} height={14} />
            </div>
            <div className="flex items-center justify-center gap-1">
              <SkeletonComponent width={15} height={14} />
              <SkeletonComponent width={70} height={14} />
            </div>
            <div className="flex items-center justify-center gap-1">
              <SkeletonComponent width={15} height={14} />
              <SkeletonComponent width={95} height={14} />
            </div>
            <div className="flex items-center justify-center gap-1">
              <SkeletonComponent width={15} height={14} />
              <SkeletonComponent width={80} height={14} />
            </div>
          </div>
        </div>

        <SkeletonComponent height={56} />

        <div className="flex flex-col items-center space-y-2 mt-2">
          <SkeletonComponent width={295} height={14} />
          <SkeletonComponent width={180} height={14} />
        </div>
      </CardContent>
    </Card>
  );
};
