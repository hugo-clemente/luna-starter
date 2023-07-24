import Header from "@/components/header";
import { currentUser } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-50">
      <Header />

      <div className="-mt-24 container">
        <main className="rounded-lg bg-white px-5 py-6 shadow sm:px-6 min-h-[70vh] flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}

export const runtime = "edge"; // 'nodejs' (default) | 'edge'
