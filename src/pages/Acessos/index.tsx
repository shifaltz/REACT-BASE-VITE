import { ProfileCard } from "@/components/shared/ProfileCard";
import {
  faBalanceScale,
  faUser,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logoSpprev from "@/assets/images/logo_spprev.png";
import { useNavigate } from "react-router-dom";
import OabValidateForm from "@/components/shared/OabValidateForm";

export default function GerenciamentoAcesso() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);

    if (profile === "personal" || profile === "representante") {
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

      <div className="flex flex-row w-full justify-center items-center gap-5 mb-10">
        <ProfileCard
          icon={faUser}
          title="Perfil Pessoal"
          onClick={() => handleProfileSelect("personal")}
        />
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
      </div>

      {selectedProfile === "advogado" && (
        <div className="flex flex-row  justify-center items-center gap-5 w-5xl ">
          <OabValidateForm />
        </div>
      )}
    </div>
  );
}
