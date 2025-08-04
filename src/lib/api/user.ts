import { api } from "./axios";
import { endpoints } from "./endpoints";

export type AcessoPerfil = {
    codigo: string;
    descricao: string;
};

export type AcessoPadrao = {
    perfil: string;
    estilos: string;
};

export type UsuarioAcessoResponse = {
    login: string;
    perfis: AcessoPerfil[];
    padroes: AcessoPadrao;
};

// Token vindo do login gov.br
type UsuarioAcessoPayload = {
    govBrAcessosToken: string;
};

export async function getUsuarioAcessos(
    payload: UsuarioAcessoPayload
): Promise<UsuarioAcessoResponse> {
    const { data } = await api.post(endpoints.usuario.acessos, payload);
    return data;
}
