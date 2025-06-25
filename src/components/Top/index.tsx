import { Bell, Moon, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-zinc-100 dark:bg-gray-900 border-b p-4 flex items-center justify-between shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">SÃO PAULO PREVIDÊNCIA</span>
      </div>

      {/* Ações à direita */}
      <div className="flex items-center gap-4">
        {/* Botões de acessibilidade */}
        <Button variant="outline" size="icon">
          <Text className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Moon className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Bell className="w-4 h-4" />
        </Button>

        {/* Avatar com dropdown */}
        <div className="flex items-center cursor-pointer">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src="" alt="Avatar" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Olá, Pedro</span>
        </div>
      </div>
    </header>
  );
}
