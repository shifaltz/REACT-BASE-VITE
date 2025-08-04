import { ProfileCard } from "@/components/shared/ProfileCard";
import {
  faBalanceScale,
  faBuildingUser,
  faHandHoldingDollar,
  faUser,
  faUserGroup,
  faUserShield,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import logoSpprev from "@/assets/images/logo_spprev.png";
import { useNavigate } from "react-router-dom";
import OabValidateForm from "@/components/shared/OabValidateForm";
import { getUsuarioAcessos, type UsuarioAcessoResponse } from "@/lib/api/user";

export default function GerenciamentoAcesso() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const navigate = useNavigate();

  const [acesso, setAcesso] = useState<UsuarioAcessoResponse | null>(null);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ";

    getUsuarioAcessos({ govBrAcessosToken: token })
      .then(setAcesso)
      .catch((err) => console.error("Erro ao buscar acessos", err));
  }, []);

  useEffect(() => {
    console.log("acesso", acesso);
  }, [acesso]);

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);

    if (profile !== "advogado") {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <img src={logoSpprev} alt="SPPREV" className="w-24 h-auto" />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Selecione o perfil que deseja acessar:
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-10 w-full max-w-6xl">
        <div className="flex flex-row justify-center items-center gap-5 w-full">
          <ProfileCard
            icon={faUserTag}
            title="Aposentado"
            onClick={() => handleProfileSelect("aposentado")}
          />
          <ProfileCard
            icon={faUserGroup}
            title="Pensionista"
            onClick={() => handleProfileSelect("pensionista")}
          />
          <ProfileCard
            icon={faBuildingUser}
            title="Servidor Ativo"
            onClick={() => handleProfileSelect("servidorAtivo")}
          />
          <ProfileCard
            icon={faHandHoldingDollar}
            title="Beneficiário de Pensão Alimentícia"
            onClick={() => handleProfileSelect("aposentado")}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-5 w-full">
          <ProfileCard
            icon={faBalanceScale}
            title="Advogado"
            onClick={() => handleProfileSelect("advogado")}
          />
          <ProfileCard
            icon={faUserShield}
            title="Outros representantes"
            onClick={() => handleProfileSelect("representante")}
          />
          <ProfileCard
            icon={faUser}
            title="Sem Vínculo com a SPPREV"
            onClick={() => handleProfileSelect("semVinculo")}
          />
        </div>
      </div>

      {selectedProfile === "advogado" && (
        <div className="flex flex-row  justify-center items-center gap-5 w-5xl ">
          <OabValidateForm />
        </div>
      )}
    </div>
  );
}
