import React from "react";

import Link from "next/link";

import { Menu } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "./clerk";
import Navigation from "./navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => (
  <header className="dark w-full bg-background text-foreground pb-32">
    <Collapsible className="container">
      <div className="flex h-20 items-center border-b mb-2">
        <Link href="/" className="flex flex-row items-center mr-6 sm:mr-10">
          <Image src="/logo.svg" alt="Logo" width={20} height={20} />
        </Link>

        <OrganizationSwitcher
          dark
          appearance={{
            elements: {
              rootBox: "flex", // inline-flex by default, but it adds a weird bottom margin
            },
          }}
        />

        <div className="spacer flex-1" />

        <div className="hidden md:block">
          <UserButton dark />
        </div>

        <CollapsibleTrigger className="md:hidden" asChild>
          <Button variant="ghost">
            <Menu size={24} />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="md:hidden">
        <nav className="flex flex-col space-y-1 pb-2 mb-4 border-b">
          <Navigation href="/dashboard">Overview</Navigation>
          <Navigation href="/dashboard/details">Details</Navigation>

          <Navigation href="/dashboard/settings">Settings</Navigation>
        </nav>
        <div className="flex justify-end w-full">
          <UserButton
            dark
            userProfileProps={{
              // @ts-expect-error
              appearance: {
                variables: {
                  colorPrimary: "red",
                },
              },
            }}
          />
        </div>
      </CollapsibleContent>

      <nav className="flex-row items-center hidden md:flex space-x-2">
        <Navigation href="/dashboard">Overview</Navigation>
        <Navigation href="/dashboard/details">Details</Navigation>
        <div className="spacer flex-1" />
        <Navigation href="/dashboard/settings">Settings</Navigation>
      </nav>
    </Collapsible>
  </header>
);

export default Header;
