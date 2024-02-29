"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import {
  CreditCard,
  LogOut,
  PlusCircle,
  Settings,
  User,
  NotebookPen,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ScreenRoutes } from "@/helpers/config/site";

interface UserNavProps {
  username: string;
  email: string;
  isAdmin: boolean | undefined;
}

export const UserNav: React.FC<UserNavProps> = ({
  username,
  email,
  isAdmin,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/${ScreenRoutes.USER_POSTS}`}>
            <DropdownMenuItem className="cursor-pointer">
              <NotebookPen className="mr-2 h-4 w-4" />
              <span>My Posts</span>
              <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={`/${ScreenRoutes.USER_POSTS}/new`}>
            <DropdownMenuItem className="cursor-pointer">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New Post</span>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          {isAdmin && (
            <Link href={`/${ScreenRoutes.DASHBOARD}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
