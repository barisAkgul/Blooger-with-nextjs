import { SidebarRoutes } from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <div className="h-full border-l border-prussian-blue flex flex-col overflow-y-auto bg-oxford-blue shadow-sm">
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
