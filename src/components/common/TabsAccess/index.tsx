import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, User2, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabsAccess() {
  const [activeTab, setActiveTab] = useState<"autorizados" | "pendentes">(
    "autorizados"
  );

  return (
    <div className="w-full p-4">
      {/* Tabs */}
      <div className="flex gap-5  mb-4">
        <button
          className={cn(
            "flex w-1/2 items-center justify-center gap-2 pb-1 text-base font-medium",
            activeTab === "autorizados"
              ? "text-teal-600 border-b-2 border-teal-600"
              : "text-gray-700"
          )}
          onClick={() => setActiveTab("autorizados")}
        >
          <User2 className="w-4 h-4" /> Acessos Autorizados
        </button>
        <button
          className={cn(
            "flex w-1/2 items-center justify-center gap-2 pb-1 text-base font-medium",
            activeTab === "pendentes"
              ? "text-teal-600 border-b-2 border-teal-600"
              : "text-gray-700"
          )}
          onClick={() => setActiveTab("pendentes")}
        >
          <Users2 className="w-4 h-4" /> Autorizações Pendentes
        </button>
      </div>

      <div className="mt-10">
        {/* Conteúdo da aba */}
        {activeTab === "autorizados" ? (
          <Card className="w-[300px] shadow-md relative">
            <button className="absolute top-2 right-2 text-red-600 hover:text-red-800">
              <X className="w-4 h-4" />
            </button>
            <CardContent className="flex flex-col items-center py-6 gap-3">
              <User2 className="w-10 h-10 text-teal-600" />
              <p className="font-semibold">Juan Moreira Sales</p>
              <p className="text-xs text-gray-500 mb-2">
                Acesso desde: 15/07/25 às 12:35
              </p>
              <div className="px-3 py-1 bg-teal-600 text-white text-xs rounded-md flex items-center gap-2">
                <FontAwesomeIcon icon={"scale-balanced"} />
                <span className="font-bold">Advogado</span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full  shadow-md relative">
            <CardContent className="flex items-center justify-between py-4 px-6 gap-4">
              <div className="flex items-center gap-3">
                <User2 className="w-6 h-6 text-teal-600" />
                <p className="font-medium">Juan Moreira Sales</p>
                <div className="px-3 py-1 bg-teal-600 text-white text-xs rounded-md flex items-center gap-2">
                  <FontAwesomeIcon icon={"scale-balanced"} />
                  <span className="font-bold">Advogado</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold dark:text-white">
                  CPF: 123.456.789-10
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-green-600 hover:text-green-800"
                >
                  <Check className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
