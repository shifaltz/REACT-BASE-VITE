import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, ChevronRight, MoveRight } from "lucide-react";
import {
  Home as HomeIcon,
  MapPin as MapPinIcon,
  FileText as FileTextIcon,
  DollarSign as DollarSignIcon,
} from "lucide-react";

const services = [
  {
    title: "Solicitar visita domiciliar",
    icon: <HomeIcon className="h-6 w-6 text-teal-600" />,
    href: "/servicos/visita-domiciliar",
  },
  {
    title: "Alterar endereço",
    icon: <MapPinIcon className="h-6 w-6 text-teal-600" />,
    href: "/servicos/alterar-endereco",
  },
  {
    title: "Demonstrativo de pensão alimentícia",
    icon: <FileTextIcon className="h-6 w-6 text-teal-600" />,
    href: "/servicos/demonstrativo-pensao",
  },
  {
    title: "Pensão online",
    icon: <DollarSignIcon className="h-6 w-6 text-teal-600" />,
    href: "/servicos/pensao-online",
  },
];

export default function PopularServices() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <ChartNoAxesCombined className="h-5 w-5" />
          <span>Serviços mais acessados</span>
        </div>
        <a href="/servicos">
          <Button variant="link" className="text-sm">
            Ver todos os serviços{" "}
            <MoveRight className="inline-block h-4 w-4 ml-1" />
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <a key={service.title} href={service.href}>
            <Card className="h-32 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col  space-x-2 text-base gap-2">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
