import React from "react";
import { cn } from "@/lib/utils"; // ou use clsx/cva conforme seu projeto

type BreadcrumbPageProps = {
  items: string[];
  className?: string;
};

export function BreadcrumbPage({ items, className }: BreadcrumbPageProps) {
  return (
    <div className={cn("flex items-center py-2", className)}>
      {/* Barra lateral decorativa */}
      <div className="w-1 bg-cyan-400 h-7 mr-5"></div>

      {/* Caminho de navegação */}
      <nav className="text-xl text-gray-600 dark:text-gray-300 flex flex-wrap gap-x-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item}>
              <span
                className={cn(
                  isLast && "font-semibold text-black dark:text-white"
                )}
              >
                {item}
              </span>
              {!isLast && <span className="mx-1 text-gray-400">/</span>}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
