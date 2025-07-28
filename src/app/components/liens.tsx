// import React from 'react';

type LiensProps = {
  lien: string;
  name: string;
};

const Liens: React.FC<LiensProps> = ({ lien, name }) => {
  return (
    <li>
      <a href={lien}>{name}</a>
    </li>
  );
};

export default Liens;
