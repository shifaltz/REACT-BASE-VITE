import { Bell, Moon, Sun, Lock } from "lucide-react"; // Adicione novos ícones
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "../../theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoSpprev from "@/assets/images/logo_spprev.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleAcessibilidade = () => {
    navigate("/acessibilidadeFonte");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#EEEEEE] dark:bg-zinc-900 border-b p-4 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-2 pl-10">
        <img src={logoSpprev} alt="Logo SPPREV" className="h-11 w-16" />
      </div>

      <div className="flex items-center gap-4">
        {/* Botões de acessibilidade */}
        <Button
          variant="outline"
          className="w-10 h-10 hover:cursor-pointer"
          onClick={handleAcessibilidade}
        >
          <FontAwesomeIcon icon="a" />
        </Button>

        {/* Botão de troca de tema */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="relative hover:cursor-pointer"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4 hover:cursor-pointer" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className=" bg-white dark:bg-zinc-900 shadow-lg"
            style={{ maxWidth: "30vw" }}
          >
            <SheetHeader>
              <SheetTitle className="flex  text-2xl justify-center mb-5">
                Notificações
              </SheetTitle>
              <div className="flex flex-row justify-between px-5">
                <span className="font-bold text-zinc-500 cursor-pointer">
                  Ver todas
                </span>
                <span className="font-bold text-red cursor-pointer">
                  Apagar todas
                </span>
              </div>
            </SheetHeader>
            <div className="w-full  p-2 gap-5">
              <Card className="w-full  border-zinc-400 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-lg rounded-lg overflow-hidden mb-2">
                <CardContent className="w-full gap-2">
                  {/* Item com exigências (não concluído) */}
                  <div className="flex items-start">
                    <div className=" w-full flex flex-row">
                      <div className="flex  items-center w-1/12 ">
                        <FontAwesomeIcon icon={"bell"} className=" h-6 w-6" />
                      </div>
                      <div className="flex flex-col justify-center  w-10/12 ">
                        <h3 className="font-bold text-gray-800">
                          Você possui exigências
                        </h3>
                        <p className="text-sm text-gray-600">
                          Confira a página de exigências para saber mais
                        </p>
                      </div>
                      <div className="flex justify-end items-center w-1/12 ">
                        <FontAwesomeIcon icon={"close"} className=" h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full  border-red-700 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-lg rounded-lg overflow-hidden mb-2">
                <CardContent className="w-full gap-2">
                  {/* Item com exigências (não concluído) */}
                  <div className="flex items-start">
                    <div className=" w-full flex flex-row text-red">
                      <div className="flex  items-center w-1/12 ">
                        <FontAwesomeIcon
                          icon={"circle-exclamation"}
                          className=" h-6 w-6 "
                        />
                      </div>
                      <div className="flex flex-col justify-center  w-10/12 ">
                        <h3 className="font-bold ">Você possui exigências</h3>
                        <p className="text-sm ">
                          Confira a página de exigências para saber mais
                        </p>
                      </div>
                      <div className="flex justify-end items-center w-1/12 ">
                        <FontAwesomeIcon icon={"close"} className=" h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full  border-green-700 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-lg rounded-lg overflow-hidden mb-2">
                <CardContent className="w-full gap-2">
                  {/* Item com exigências (não concluído) */}
                  <div className="flex items-start text-green-600">
                    <div className=" w-full flex flex-row">
                      <div className="flex   items-center w-1/12 ">
                        <FontAwesomeIcon icon={"check"} className=" h-6 w-6" />
                      </div>
                      <div className="flex flex-col justify-center  w-10/12 ">
                        <h3 className="font-bold ">Você possui exigências</h3>
                        <p className="text-sm ">
                          Confira a página de exigências para saber mais
                        </p>
                      </div>
                      <div className="flex justify-end items-center w-1/12 ">
                        <FontAwesomeIcon icon={"close"} className=" h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src="" alt="Avatar" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Olá, Pedro</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 mt-2 " align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:cursor-pointer">
                <Lock className="mr-2 h-4 w-4" />
                <span>Meus Dados</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:cursor-pointer">
                <FontAwesomeIcon icon="users-gear" className="mr-2 h-4 w-4" />
                <span>Gestão de Acessos</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon="file-contract"
                  className="mr-2 h-4 w-4"
                />
                <span>Política de Privacidade</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:cursor-pointer">
                <FontAwesomeIcon icon="question" className="mr-2 h-4 w-4" />
                <span>Dúvidas?</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="hover:cursor-pointer">
              <FontAwesomeIcon icon="id-badge" className="mr-2 h-4 w-4" />

              <span>Alterar Perfil</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon="right-from-bracket"
                className="mr-2 h-4 w-4"
              />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
