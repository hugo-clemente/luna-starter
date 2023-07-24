"use server";

import getDb, { workspace } from "@/server/db";
import schema from "./schema";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export const createWorkspace = async (inputs: { name: string }) => {
  console.log(inputs);
  const data = schema.parse(inputs);

  const { userId, orgId } = auth();
  if (!userId) throw new Error("Not logged in");

  const db = getDb();

  const [newWorkspace] = await db
    .insert(workspace)
    .values({
      name: data.name,
      owner: orgId || userId,
    })
    .returning();

  redirect(`/dashboard/workspaces/${newWorkspace.id}`);
};
