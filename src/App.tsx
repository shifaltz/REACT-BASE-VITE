import PopularServices from "./components/PopularServices";
import RecentRequests from "./components/RecentRequests";
import SearchMenu from "./components/SearchMenu";
import { AppSidebar } from "./components/Side";
import { ThemeProvider } from "./components/theme-provider";
import Topbar from "./components/Top";
import { SidebarProvider } from "./components/ui/sidebar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Torna este container o contexto de posicionamento relativo*/}
      <div className="min-h-screen dark:bg-zinc-900">
        {/* Topbar fixo em top:0 */}
        <Topbar />

        {/* Sidebar fixo em top:64px, left:0 */}
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
    </ThemeProvider>
  );
}

export default App;
