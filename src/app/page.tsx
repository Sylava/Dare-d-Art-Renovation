import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <img className="bedroom-img" src="./images/bedroom.jpg" alt="bedroom" />
        <article className="presentation-grid grid grid-cols-3">
          <div className="presentation-title grid-cols-1">
            <h2>QUI SOMMES-NOUS ?</h2>
          </div>
          <div className="presentation-text row-start-2 col-start-2 col-end-4">
            <p>
              Dare-D’Art Rénovation est une entreprise française spécialisée dans les travaux de neuf et de rénovation.
            </p>
            <p>
              Particuliers, professionnels ou investisseurs, nous mettons à votre disposition notre expertise et notre savoir-faire pour la réalisation de vos projets.
            </p>
          </div>
        </article>
        <article className="prestations grid grid-cols-3">
          <div className="col-span-1">
            <div className="prestations-title">
              <h2>PRESTATIONS</h2>
            </div>
            <div className="prestations-text">
              <p>Dare-D’Art Rénovation</p>
              <p>vous accompagne dans toutes les étapes de vos projets.</p>
            </div>
          </div>
          <div className="prestations-img-container col-span-2">
            <div className="prestations-img">
              <img src="./images/plomberie.jpeg" alt="plomberie" />
              <Link href="/plomberie">Plomberie</Link>
            </div>
            <div className="prestations-img">
              <img src="./images/peinture.png" alt="peinture" />
              <Link href="/peinture">Peinture</Link>
            </div>
            <div className="prestations-img">
              <img src="./images/electricite.png" alt="electricite" />
              <Link href="/electricite">Electricité</Link>
            </div>
          </div>
          <div className="contact-container cols-span-1">
            <div className="contact">
              <p>Une question ? Un devis ?</p>
              <Link href="/contact">CONTACTEZ-NOUS</Link>
            </div>
          </div>
          <div className="prestations-img-container col-span-2">
            <div className="prestations-img">
              <img src="./images/revetement.jpeg" alt="revetement" />
              <Link href="/revetement">Revêtement mural et sol</Link>
            </div>
            <div className="prestations-img">
              <img src="./images/ravalement.jpg" alt="ravalement" />
              <Link href="/ravalement">Ravalement</Link>
            </div>
            <div className="prestations-img">
              <img src="./images/maconnerie.png" alt="maçonnerie" />
              <Link href="/maconnerie">Maçonnerie</Link>
            </div>
          </div>
        </article>
        <h2 className="engagement-title">NOS ENGAGEMENTS</h2>
        <article className="engagement-container grid grid-cols-2">
          <div className="vignette">
            <img src="./images/support.png" alt="support" />
            <h3>UN INTERLOCUTEUR UNIQUE</h3>
            <p>Votre projet sera suivi et géré  par une seule et même personne tout le long de la réalisation de votre chantier.</p>
          </div>
          <div className="vignette">
            <img src="./images/devis.png" alt="devis" />
            <h3>DEVIS RAPIDE</h3>
            <p>Votre devis est réalisé en 48h après visite du chantier par votre chargé d’affaire. Devis gratuit et sans engagement.</p>
          </div>
          <div className="vignette">
            <img src="./images/handshake.png" alt="handshake" />
            <h3>CONSTRUCTION DU PROJET</h3>
            <p>Ensemble nous construisons votre projet pour que vos envies deviennent une réalité.</p>
          </div>
          <div className="vignette">
            <img src="./images/bank.png" alt="bank" />
            <h3>ASSURANCE</h3>
            <p>Assurances décennales garantissant votre chantier.</p>
          </div>
        </article>
        <div className="footer-contact">
          <h2>A  chaque projet sa solution !</h2>
          <Link href="/contact">CONTACTEZ-NOUS !</Link>
        </div>
      </main>
    </>
  );
}
