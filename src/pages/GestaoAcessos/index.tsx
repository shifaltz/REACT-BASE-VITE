import TabsAccess from "@/components/common/TabsAccess";
import { BreadcrumbPage } from "@/components/shared/BreadcrumbPage";
import { TitlePage } from "@/components/shared/TitlePage";

export default function GestaoAcessos() {
  return (
    <div className="w-full h-20 flex flex-col mt-20">
      <BreadcrumbPage items={["Início", "Gestão de Acessos"]} />
      <TitlePage namePage="Gestão de Acessos"></TitlePage>
      <TabsAccess />
    </div>
  );
}
