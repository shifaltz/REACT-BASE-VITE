// ProtectedLayout.tsx
import { Outlet } from "react-router-dom";
import Topbar from "./components/common/Top";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/common/Side";

export function ProtectedLayout() {
  return (
    <div className="min-h-screen dark:bg-zinc-900">
      <Topbar />
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <main className="flex flex-col absolute top-1 left-80 right-0 bottom-0 overflow-auto p-4 dark:bg-zinc-900">
        <Outlet />
      </main>
    </div>
  );
}
