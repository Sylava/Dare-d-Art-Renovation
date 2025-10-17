import Link from "next/link";

type LiensProps = {
  lien: string;
  name: string;
  onClick?: () => void; // ✅ optionnel pour pouvoir fermer le menu
};

const Liens: React.FC<LiensProps> = ({ lien, name, onClick }) => {
  return (
    <li>
      <Link href={lien} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
};

export default Liens;
