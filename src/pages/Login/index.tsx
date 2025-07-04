// src/pages/Login/index.tsx
import { Button } from "@/components/ui/button";
import loginImage from "@/assets/images/login.png";
import logoSpprev from "@/assets/images/logo_spprev.png";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafa] relative overflow-hidden">
      {/* Background Logo Substituindo SVG */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0">
        <img
          src={logoSpprev}
          alt="Logo SPPREV Background"
          className="w-1/2 opacity-10"
        />
      </div>

      {/* Card */}
      <Card className="h-80 w-xl shadow-xl overflow-hidden relative z-10">
        <CardContent className="flex flex-col items-center h-full p-0">
          {/* Topo com logo */}
          <div className="flex items-center justify-center  w-full">
            <img src={logoSpprev} alt="Logo SPPREV" className="h-16" />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col sm:flex-row w-full h-4/5 ">
            {/* Ilustração */}
            <div className="w-1/2 h-full pt-10 overflow-hidden">
              <img
                src={loginImage}
                alt="Login Illustration"
                className="w-full h-full object-cover object-top scale-150"
              />
            </div>

            {/* Texto */}
            <div className="w-1/2 text-center sm:text-left pr-10 flex flex-col justify-center ">
              <h2 className="text-4xl font-bold text-primary">Faça o Login</h2>
              <p className="text-sm text-primary mt-1 mb-4">
                Para acessar o autoatendimento, por favor, clique no botão
                abaixo e faça seu login através do portal oficial do Gov.br.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <User />
                Entrar com o gov.br
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
