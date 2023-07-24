import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
    </div>
  );
}
