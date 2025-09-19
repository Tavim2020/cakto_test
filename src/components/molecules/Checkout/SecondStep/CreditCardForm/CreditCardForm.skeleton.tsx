import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const CreditCardFormSkeleton = () => {
  return (
    <div className="mt-6 space-y-4 p-6 bg-blue-50/50 rounded-lg border border-blue-200">
      <div className="space-y-1">
        <Skeleton width={165} height={14} />
        <div className="w-full md:w-47.5">
          <Skeleton height={34} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Skeleton width={140} height={14} />
          <Skeleton height={34} />
        </div>
        <div className="space-y-1">
          <Skeleton width={110} height={14} />
          <Skeleton height={34} />
        </div>
        <div className="space-y-1">
          <Skeleton width={70} height={14} />
          <Skeleton height={34} />
        </div>
        <div className="space-y-1">
          <Skeleton width={45} height={14} />
          <Skeleton height={34} />
        </div>
      </div>
    </div>
  );
};
