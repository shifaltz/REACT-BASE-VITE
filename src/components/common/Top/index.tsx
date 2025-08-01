import { Bell, Moon, Sun, Settings, LogOut, Lock } from "lucide-react"; // Adicione novos ícones
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "../../theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importações do Dropdown Menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Topbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#EEEEEE] dark:bg-zinc-900 border-b p-4 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">SÃO PAULO PREVIDÊNCIA</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Botões de acessibilidade */}
        <Button variant="outline" className="w-10 h-10">
          <FontAwesomeIcon icon="a" />
        </Button>

        {/* Botão de troca de tema */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="relative"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button variant="outline" size="icon">
          <Bell className="w-4 h-4" />
        </Button>

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
