import { api } from "./axios";
import { endpoints } from "./endpoints";

export type Modulo = {
    codigo: number;
    nome: string;
    url: string | null;
    icone: string;
};

export async function getModulos(): Promise<Modulo[]> {
    const { data } = await api.get(endpoints.usuario.modulos);
    return data;
}
