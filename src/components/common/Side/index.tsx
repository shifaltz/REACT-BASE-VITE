import * as React from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getModulos, type Modulo } from "@/lib/api/modulos";

const data = {
  navMain: [
    {
      title: "Nova Solicitação",
      url: "#",
      icon: Home,
      items: [
        {
          title: "Pensão por Morte",
          url: "#",
        },
        {
          title: "Aposentadoria",
          url: "#",
        },
      ],
    },
    {
      title: "Minhas Solicitações",
      url: "#",
      icon: Calendar,
      items: [],
    },
    {
      title: "Extrato, comprovantes ",
      url: "#",
      icon: Inbox,
      items: [
        {
          title: "Informe de rendimento",
          url: "#",
        },
        {
          title: "Demonstrativo de Pagamentos",
          url: "#",
        },
      ],
    },
    {
      title: "Atualização Cadastral",
      url: "#",
      icon: Search,
      items: [
        {
          title: "Recadastramento",
          url: "#",
        },
        {
          title: "Censo",
          url: "#",
        },
      ],
    },
    {
      title: "Carteira de Documentos",
      url: "#",
      icon: Settings,
      items: [],
    },
    {
      title: "Cumprimento de exigências",
      url: "#",
      icon: Calendar,
      items: [],
    },
    {
      title: "Suporte",
      url: "#",
      icon: Inbox,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [modulos, setModulos] = React.useState<Modulo[]>([]);

  console.log("modulos", modulos);

  React.useEffect(() => {
    getModulos()
      .then(setModulos)
      .catch((err) => {
        console.error("Erro ao buscar módulos", err);
      });
  }, []);

  return (
    <>
      <Sidebar {...props} className="fixed top-16 h-full w-64 shadow-2xl">
        <SidebarContent className="gap-0 pt-4 bg-[#EEEEEE] dark:bg-zinc-900">
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white text-sm"
              >
                <CollapsibleTrigger className="gap-2">
                  <FontAwesomeIcon icon="house" />
                  <p>Inicio</p>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
            </SidebarGroup>
          </Collapsible>

          {data.navMain.map((item) => (
            <Collapsible
              key={item.title}
              title={item.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white text-sm"
                >
                  <CollapsibleTrigger className="gap-1">
                    <item.icon />
                    {item.title}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <a
                              href={item.url}
                              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                            >
                              {item.title}
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
