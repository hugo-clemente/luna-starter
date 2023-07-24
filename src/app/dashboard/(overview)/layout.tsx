import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-bold">Workspaces</h2>

        <Button asChild>
          <Link href="/dashboard/new">Create workspace</Link>
        </Button>
      </div>

      <Separator orientation="horizontal" className="my-4" />

      {children}
    </>
  );
}
