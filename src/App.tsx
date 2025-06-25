import { AppSidebar } from "./components/Side";
import Topbar from "./components/Top";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <body className="bg-zinc-900">
        <div className="flex flex-col ">
          <div className="h-fit">
            <Topbar />
          </div>
          <div className="mt-20">
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
