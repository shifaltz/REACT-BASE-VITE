import { useFontScale } from "@/lib/font-scale-context";
import { Button } from "@/components/ui/button";

export function AcessibilidadeFonte() {
  const { scale, setScale } = useFontScale();

  return (
    <div className="w-full h-20 flex flex-col mt-20 ">
      <div className="flex gap-2 mb-20">
        {(["pequeno", "padrao", "grande"] as const).map((option) => (
          <Button
            key={option}
            variant={scale === option ? "default" : "outline"}
            onClick={() => setScale(option)}
          >
            {option.toUpperCase()}
          </Button>
        ))}
      </div>
      <p className="text-xs">xs</p>
      <p className="text-sm">sm</p>
      <p className="text-base">base</p>
      <p className="text-lg">lg</p>
      <p className="text-xl">xl</p>
      <p className="text-2xl">2</p>
      <p className="text-3xl">3</p>
      <p className="text-4xl">4</p>
      <p className="text-5xl">5</p>
      <p className="text-6xl">6</p>
      <p className="text-7xl">7</p>
      <p className="text-8xl">8</p>
      <p className="text-9xl">9</p>
    </div>
  );
}
