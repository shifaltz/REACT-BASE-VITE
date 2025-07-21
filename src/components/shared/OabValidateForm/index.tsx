import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function OabValidateForm() {
  const [oabNumber, setOabNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de validação da OAB aqui
    console.log("Validando OAB:", oabNumber);
  };

  return (
    <div className="flex flex-col w-full gap-6 ">
      <div className="space-y-2">
        <h2 className="flex text-xl justify-center font-semibold leading-none tracking-tight">
          Informe o número de sua OAB abaixo e clique em "Validar OAB"
        </h2>
      </div>

      {/* Formulário de validação */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          <div className="w-1/3">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="nome" className="text-zinc-400">
                Nome
              </Label>
              <Input
                type="nome"
                id="nome"
                placeholder="Nome"
                disabled
                className="bg-zinc-200"
              />
            </div>
            <Label className="text-zinc-400 italic font-light text-sm">
              Informação automaticamente extraída do cadastro do Gov.br
            </Label>
          </div>
          <div className="w-1/3">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="cpf" className="text-zinc-400">
                CPF
              </Label>
              <Input
                type="cpf"
                id="cpf"
                placeholder="cpf"
                disabled
                className="bg-zinc-200"
              />
            </div>
            <Label className="text-zinc-400 italic font-light text-sm">
              Informação automaticamente extraída do cadastro do Gov.br
            </Label>
          </div>
          <div className="w-1/3">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="numeroOab">Número OAB</Label>
              <Input type="numeroOab" id="numeroOab" placeholder="Numero OAB" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <div className="w-[120px]">
            <Button className="w-full bg-cyan">Validar OAB</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
