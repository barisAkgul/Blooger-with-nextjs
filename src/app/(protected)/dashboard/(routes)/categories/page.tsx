import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoriesClient } from "./components/client";
import { CategoriesColumn } from "./components/columns";

const CategoriesPage = async () => {
  const categories = await prismadb.category.findMany();

  const formattedCategories: CategoriesColumn[] = categories.map((item) => ({
    id: item.id,
    title: item.title,
    img: item?.img,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
