import { Button } from "@/components/ui/button";
import { auth, useOrganizationList } from "@clerk/nextjs";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl">Nothing to see here... yet</h1>
      <Button asChild className="mt-6">
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>
    </main>
  );
};

export default Home;
