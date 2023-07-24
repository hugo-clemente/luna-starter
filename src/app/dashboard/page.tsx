"use server";

import BlockPlaceholder from "@/components/block-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import getDb, { workspace } from "@/server/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { Sparkles } from "lucide-react";
import Image from "next/image";
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
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-bold">Workspaces</h2>

        <Button asChild>
          <Link href="/dashboard/new">Create workspace</Link>
        </Button>
      </div>

      <Separator orientation="horizontal" className="my-4" />

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
            <Card key={workspace.id}>
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
          ))}
        </div>
      )}
    </>
  );
}
