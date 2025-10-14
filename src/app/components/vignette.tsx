import React from 'react';

type VignetteProps = {
    titre: string;
    text: string;
    imageSrc: string;
    imageAlt: string;
};

const Vignette: React.FC<VignetteProps> = ({titre, text, imageSrc, imageAlt}) => {
    return (
        <div className="vignette">
            <img src={imageSrc} alt={imageAlt} />
            <h3>{titre}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Vignette;
