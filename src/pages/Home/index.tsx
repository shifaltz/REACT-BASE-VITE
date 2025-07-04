import PopularServices from "@/components/common/PopularServices";
import RecentRequests from "@/components/common/RecentRequests";
import SearchMenu from "@/components/common/SearchMenu";
import { AppSidebar } from "@/components/common/Side";
import Topbar from "@/components/common/Top";
import Welcome from "@/components/common/Welcome";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-zinc-900">
      <Topbar />

      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>

      <main className="flex flex-col absolute top-1 left-80 right-0 bottom-0 overflow-auto p-4 dark:bg-zinc-900">
        <Welcome />
        <SearchMenu />
        <RecentRequests />
        <PopularServices />
      </main>
    </div>
  );
}
