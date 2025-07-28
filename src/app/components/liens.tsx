import Link from 'next/link';

type LiensProps = {
  lien: string;
  name: string;
};

const Liens: React.FC<LiensProps> = ({ lien, name }) => {
  return (
    <li>
      <Link href={lien}>{name}</Link>
    </li>
  );
};

export default Liens;
