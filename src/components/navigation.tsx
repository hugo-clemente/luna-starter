"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Route } from "next";

const Navigation = <T extends string>({
  href,
  children,
}: {
  href: Route<T>;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        href == pathname
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent/60 hover:text-accent-foreground",
        "rounded-md px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      aria-current={href == pathname ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default Navigation;
