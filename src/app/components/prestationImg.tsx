import React from 'react';
import Link from 'next/link';

type PrestationProps = {
    titre: string;
    lien: string;
    imageSrc: string;
    imageAlt: string;
};

const PrestationImg: React.FC<PrestationProps> = ({titre, lien, imageSrc, imageAlt}) => {
    return (
        <div className="prestations-img">
            <img src={imageSrc} alt={imageAlt} />
            <Link href={lien}>{titre}</Link>
        </div>
    );
}

export default PrestationImg;
