// App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "./ProtectedLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GerenciamentoAcesso from "./pages/GerenciamentoAcesso";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Rotas “públicas” sem layout */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/gerenciamentoAcesso"
            element={<GerenciamentoAcesso />}
          />
          {/* Todas as outras rotas usam o ProtectedLayout */}
          <Route path="/" element={<ProtectedLayout />}>
            <Route index element={<Home />} />
            {/* Aqui você adiciona outras rotas internas */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
