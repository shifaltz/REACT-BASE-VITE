import { useState, useRef } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Label } from "../../ui/label";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

export default function SearchMenu() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative w-full mt-10 flex flex-col gap-2 z-50"
      ref={wrapperRef}
    >
      <Label htmlFor="search" className="italic">
        Pesquisar
      </Label>

      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput
          placeholder="Digite para pesquisar..."
          value={searchValue}
          onValueChange={setSearchValue}
          onFocus={() => {
            setOpen(true);
            setSearchValue("");
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />

        {open && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-md shadow-lg z-50 text-black dark:text-white">
            <CommandList>
              <CommandEmpty>Nenhum resultado.</CommandEmpty>

              <CommandGroup heading="Nova Solicitação">
                <CommandItem>
                  <span>Pensão por Morte</span>
                </CommandItem>
                <CommandItem>
                  <span>Aposentadoria</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Minhas Solicitações"></CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Extrato, Comprovantes">
                <CommandItem>
                  <span>Informe de rendimento</span>
                </CommandItem>
                <CommandItem>
                  <span>Demonstrativo de pagamento</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
