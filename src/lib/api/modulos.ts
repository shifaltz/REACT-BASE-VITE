import { api } from "./axios";

export type Modulo = {
    codigo: number;
    nome: string;
    url: string | null;
    icone: string;
};

export async function getModulos(): Promise<Modulo[]> {
    const { data } = await api.get("/api/v1/autoatendimento/usuario/modulos");
    return data;
}
