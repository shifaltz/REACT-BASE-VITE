

export const endpoints = {
    fluxos: "/fluxos",
    usuario: {
        acessos: "/api/v1/autoatendimento/usuario/acessos",
        dados: "/api/v1/autoatendimento/usuario/dados",
        modulos: "/api/v1/autoatendimento/usuario/modulos",
        menus: (codigoModulo: number) =>
            `/api/v1/autoatendimento/usuario/modulos/${codigoModulo}/menus`,
        servicos: "/api/v1/autoatendimento/usuario/servicos",
        favoritos: "/api/v1/autoatendimento/usuario/servicos/favoritos",
        recentes: "/api/v1/autoatendimento/usuario/solicitacoes/recentes",
    },
};

