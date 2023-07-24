import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import getDb, { workspace } from "@/server/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId, orgId } = auth();

  if (!userId) return null;

  const db = getDb();

  const workspaces = await db
    .select()
    .from(workspace)
    .where(eq(workspace.owner, orgId || userId));

  return (
    <>
      {workspaces.length === 0 && (
        <div className="flex flex-col items-center justify-center flex-1">
          <Sparkles className="text-slate-400" size={40} />
          <h3 className="text-slate-900 font-semibold text-sm">
            No Apps Found
          </h3>
          <p className="text-slate-500 text-sm">
            Create an app to get started.
          </p>
        </div>
      )}

      {workspaces.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {workspaces.map((workspace) => (
            <Link
              key={workspace.id}
              href={`/dashboard/workspaces/${workspace.id}`}
              className="group"
            >
              <Card className="group-hover:shadow">
                <CardHeader>
                  <CardTitle>{workspace.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex space-x-2">
                  {/* <Button>View</Button>
                <Button>Edit</Button> */}
                </CardContent>
                <CardFooter>
                  <Badge className="capitalize">{workspace.tier}</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
