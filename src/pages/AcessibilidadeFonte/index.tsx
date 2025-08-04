import { useFontScale } from "@/lib/font-scale-context";
import { Button } from "@/components/ui/button";
import { BreadcrumbPage } from "@/components/shared/BreadcrumbPage";
import { TitlePage } from "@/components/shared/TitlePage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AcessibilidadeFonte() {
  const { scale, setScale } = useFontScale();
  const options = ["pequeno", "padrao", "grande"] as const;
  const valueMap = {
    pequeno: 0,
    padrao: 1,
    grande: 2,
  };
  const currentValue = valueMap[scale];

  return (
    <div className="w-full h-20 flex flex-col mt-20">
      <div className="mb-10">
        <BreadcrumbPage items={["Início", "Tamanho da Fonte"]} />
        <TitlePage namePage="Tamanho da Fonte"></TitlePage>
      </div>

      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-lg">
            Personalize o autoatendimento da forma que preferir com as
            configurações abaixo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col mb-5 gap-5">
            <div className="flex flex-row items-center gap-2  text-cyan">
              <FontAwesomeIcon icon={"font"} className=" text-xl" />
              <Label htmlFor="font-size" className=" text-xl">
                Tamanho da fonte
              </Label>
            </div>
            <span>
              Ajuste o tamanho das fontes de acordo com sua preferencia
            </span>
          </div>
          <Slider
            value={[currentValue]}
            max={options.length - 1}
            step={1}
            onValueChange={(value) => {
              const selectedOption = options[value[0]];
              setScale(selectedOption);
            }}
            className="hover: cursor-pointer"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span className="text-sm">Pequeno</span>
            <span className="text-base">Médio</span>
            <span className="text-xl">Grande</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
