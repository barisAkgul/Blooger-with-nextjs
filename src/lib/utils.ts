import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For finding active route
export const isActiveRoute = (pathname: string, targetPath: string) => {
  return pathname === targetPath;
};
