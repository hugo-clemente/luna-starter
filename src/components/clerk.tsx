"use client";

import {
  CreateOrganization as ClerkCreateOrganization,
  OrganizationProfile as ClerkOrganizationProfile,
  OrganizationSwitcher as ClerkOrganizationSwitcher,
  SignIn as ClerkSignIn,
  SignUp as ClerkSignUp,
  UserButton as ClerkUserButton,
  UserProfile as ClerkUserProfile,
} from "@clerk/nextjs";

import { dark } from "@clerk/themes";

const ClerkWrapper =
  <
    T extends
      | typeof ClerkSignIn
      | typeof ClerkSignUp
      | typeof ClerkUserProfile
      | typeof ClerkUserButton
      | typeof ClerkOrganizationProfile
      | typeof ClerkCreateOrganization
      | typeof ClerkOrganizationSwitcher
  >(
    component: T
  ) =>
  (props: React.ComponentProps<T> & { dark?: boolean }) => {
    return component({
      ...props,
      appearance: {
        ...props.appearance,
        baseTheme: props.dark ? dark : undefined,
        elements: {
          ...props.appearance?.elements,
          userButtonPopoverRootBox: dark ? "dark" : undefined,
          organizationSwitcherPopoverRootBox: dark ? "dark" : undefined,
        },
      },
    });
  };

export const CreateOrganization = ClerkWrapper(ClerkCreateOrganization);
export const OrganizationProfile = ClerkWrapper(ClerkOrganizationProfile);
export const OrganizationSwitcher = ClerkWrapper(ClerkOrganizationSwitcher);
export const SignIn = ClerkWrapper(ClerkSignIn);
export const SignUp = ClerkWrapper(ClerkSignUp);
export const UserButton = ClerkWrapper(ClerkUserButton);
export const UserProfile = ClerkWrapper(ClerkUserProfile);
