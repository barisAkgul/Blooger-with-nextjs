"use client";

import { useRouter, usePathname } from "next/navigation";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { DataTable } from "@/components/ui/data-table";
import { PostsColumn, columns } from "./columns";
import { ScreenRoutes } from "@/helpers/config/site";

interface PostsClientProps {
  data: PostsColumn[];
}

const PostsClient: React.FC<PostsClientProps> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Posts (${data.length})`}
          description="Manage posts for your store"
        />
        <Button
          onClick={() => router.push(`/${ScreenRoutes.POST_DASHBOARD}/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Separator />
      <DataTable searchKey="title" columns={columns} data={data} />
    </>
  );
};

export default PostsClient;
