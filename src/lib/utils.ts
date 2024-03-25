import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For finding active route
export const isActiveRoute = (pathname: string, targetPath: string) => {
  return pathname === targetPath;
};

export const getLinkType = (pathname: string) => {
  if (pathname.includes("dashboard")) {
    return "POST_DASHBOARD";
  } else if (pathname.includes("profile")) {
    return "PROFILE";
  } else {
    return "USER_POST";
  }
};
