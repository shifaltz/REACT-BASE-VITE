import React, { createContext, useContext, useEffect, useState } from "react";

export type FontScale = "pequeno" | "padrao" | "grande";

const FontScaleContext = createContext<{
  scale: FontScale;
  setScale: (value: FontScale) => void;
}>({ scale: "padrao", setScale: () => {} });

const STORAGE_KEY = "font-scale";

export const FontScaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [scale, setScaleState] = useState<FontScale>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as FontScale | null;
    // ⚠️ Aplica imediatamente ao carregar
    const initial = saved || "padrao";

    // Aplica direto antes de renderizar
    document.documentElement.style.fontSize = {
      pequeno: "14px",
      padrao: "16px",
      grande: "18px",
    }[initial];

    return initial;
  });

  // Sempre que o usuário mudar, salva e aplica
  useEffect(() => {
    const fontSize = {
      pequeno: "14px",
      padrao: "16px",
      grande: "18px",
    }[scale];

    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem(STORAGE_KEY, scale);
  }, [scale]);

  return (
    <FontScaleContext.Provider value={{ scale, setScale: setScaleState }}>
      {children}
    </FontScaleContext.Provider>
  );
};

export const useFontScale = () => useContext(FontScaleContext);
