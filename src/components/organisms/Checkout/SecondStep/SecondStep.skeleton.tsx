import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const SecondStepSkeleton = () => {
  return (
    <Card className="shadow-sm min-w-full">
      <CardHeader>
        <div className="w-48.75 h-5">
          <Skeleton
            highlightColor="oklch(0.98 0.02 142)"
            baseColor="oklch(0.9 0 0)"
            height={20}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Skeleton
          highlightColor="oklch(0.98 0.02 142)"
          baseColor="oklch(0.9 0 0)"
          borderRadius={8}
          className="h-26 lg:h-20.5"
        />
        <Skeleton
          highlightColor="oklch(0.98 0.02 142)"
          baseColor="oklch(0.9 0 0)"
          borderRadius={8}
          className="h-18 md:h-19 lg:h-19.75"
        />
        <Skeleton
          highlightColor="oklch(0.98 0.02 142)"
          baseColor="oklch(0.9 0 0)"
          borderRadius={8}
          className="h-87.75 md:59.75 lg:h-60"
        />
      </CardContent>
    </Card>
  );
};
