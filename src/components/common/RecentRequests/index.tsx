import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Search as SearchIcon,
  AlertTriangle,
  CircleChevronRight,
  CircleChevronLeft,
  List,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const requests = [
  {
    title: "Vistas e/ ou Cópias Reprográficas",
    protocol: "289456265",
    status: "Em exigência",
    action: {
      label: "Cumprir exigências",
      variant: "warning",
      icon: (
        <FontAwesomeIcon
          icon={"triangle-exclamation"}
          className="h-4 w-4 ml-1"
        />
      ),
    },
    href: "/minhas-solicitacoes/289456265",
  },
  {
    title: "Vistas e/ ou Cópias Reprográficas",
    protocol: "289456265",
    status: "Visita agendada",
    action: {
      label: "Visualizar",
      variant: "default",
      icon: <FontAwesomeIcon icon={"search"} className="h-4 w-4 ml-1" />,
    },
    href: "/minhas-solicitacoes/289456265",
  },
  // adicione mais objetos aqui conforme necessário
];

export default function RecentRequests() {
  const [index, setIndex] = useState(0);
  const maxIndex = requests.length - 1;

  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }
  function next() {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <FontAwesomeIcon icon={"list"} className="h-5 w-5" />
          <span>Solicitações recentes</span>
        </div>
        <a href="/minhas-solicitacoes">
          <Button variant="link" className="text-sm">
            Ver minhas solicitações
            <FontAwesomeIcon
              icon={"arrow-right"}
              className="inline-block h-4 w-4 ml-1"
            />
          </Button>
        </a>
      </div>

      <div className="relative">
        {/* Slider viewport */}
        <div className="flex overflow-hidden">
          {requests.slice(index, index + 2).map((req, idx) => (
            <Card key={idx} className="flex-1 mx-2 last:mx-0">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {req.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <span className="font-medium">Protocolo:</span> {req.protocol}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {req.status}
                </p>
                <p>{req.title}</p>
              </CardContent>
              <CardFooter>
                <a href={req.href}>
                  <Button className="w-full">
                    {req.action.icon}
                    {req.action.label}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Navigation controls: arrows + dots */}
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prev}
            disabled={index === 0}
            className="text-teal-600 hover:text-teal-600 "
          >
            <FontAwesomeIcon icon={"circle-chevron-left"} />
          </Button>

          <div className="flex space-x-2">
            {requests.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2 w-2 rounded-full focus:outline-none ${
                  idx === index ? "bg-teal-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            disabled={index === maxIndex}
            className="text-teal-600 hover:text-teal-600 "
          >
            <FontAwesomeIcon icon={"circle-chevron-right"} />
          </Button>
        </div>
      </div>
    </section>
  );
}
