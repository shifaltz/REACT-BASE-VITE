// components/ProfileCard.tsx
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileCardProps = {
  icon: IconDefinition;
  title: string;
  description?: string;
  onClick: () => void;
};

export function ProfileCard({
  icon,
  title,
  description,
  onClick,
}: ProfileCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col justify-center shadow-xl items-center w-80 h-60 rounded-[32px] border border-[#BDBDBD] bg-[#FAFAFA] hover:cursor-pointer hover:bg-cyan"
      aria-label={`Acessar perfil ${title}`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-7xl text-cyan mb-3 group-hover:text-white"
      />
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
        {title}
      </h3>
      {description && (
        <p className="mt-1 text-sm text-gray-500 group-hover:text-white">
          {description}
        </p>
      )}
    </button>
  );
}
