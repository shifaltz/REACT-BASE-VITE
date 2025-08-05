

export const endpoints = {
    fluxos: "/fluxos",
    usuario: {
        acessos: "/usuario/acessos",
        dados: "/usuario/dados",
        modulos: "/usuario/modulos",
        menus: (codigoModulo: number) =>
            `/usuario/modulos/${codigoModulo}/menus`,
        servicos: "/usuario/servicos",
        favoritos: "/usuario/servicos/favoritos",
        recentes: "/usuario/solicitacoes/recentes",
    },
};

