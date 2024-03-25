import { Notebook, User, Package } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Overview } from "@/components/ui/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { getTotalUserCount } from "@/actions/get-total-user-count";
import { getTotalPostCount } from "@/actions/get-total-post-count";
import { getGraphPostDistribution } from "@/actions/get-graph-post-distribution";
import { getTotalCommentCount } from "@/actions/get-total-comment-count";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const totalUser = await getTotalUserCount();
  const graphRevenue = await getGraphPostDistribution();
  const totalPost = await getTotalPostCount();
  const totalComment = await getTotalCommentCount();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="bg-oxford-blue-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Post</CardTitle>
              <Notebook className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPost}</div>
            </CardContent>
          </Card>
          <Card className="bg-oxford-blue-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUser}</div>
            </CardContent>
          </Card>
          <Card className="bg-oxford-blue-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comments</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalComment}</div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4  bg-oxford-blue-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={graphRevenue} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
