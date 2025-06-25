import { Label } from "../../ui/label";
import { SearchInput } from "../../shared/SearchInput";

export default function SearchMenu() {
  return (
    <>
      <div className="w-full h-20 flex flex-col mt-10 gap-2 ">
        <Label htmlFor="picture" className="italic">
          Pesquisar
        </Label>
        <SearchInput placeholder="Pesquise por um produto ou serviço" />
      </div>
    </>
  );
}
