import Link from 'next/link';
import Carrousel from './components/carrousel';
import Vignette from './components/vignette';
import PrestationImg from './components/prestationImg';

export default function Home() {
  const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
  ];
  return (
    <>
      <main>
        <Carrousel images={images} />
        <article className="presentation grid grid-cols-3">
          <h2 className='grid-cols-1 col-span-3'>QUI SOMMES-NOUS ?</h2>
          <div className="presentation-text col-start-2 col-end-4">
            <p>
              Dare-D’Art Rénovation est une entreprise française spécialisée dans les travaux de neuf et de rénovation.
            </p>
            <p>
              Particuliers, professionnels ou investisseurs, nous mettons à votre disposition notre expertise et notre savoir-faire pour la réalisation de vos projets.
            </p>
          </div>
        </article>

        <article className="prestations">
          <h2>PRESTATIONS</h2>
          <div className='prestations-container grid grid-cols-3'>
            <div className="prestations-text">
              <p>Dare-D’Art Rénovation</p>
              <p>vous accompagne dans toutes les étapes de vos projets.</p>
            </div>
            <div className="prestations-img-container col-span-2">
              <PrestationImg
                titre='Plomberie'
                lien='/plomberie'
                imageSrc='./images/plomberie.jpeg'
                imageAlt='plomberie'
              />
              <PrestationImg
                titre='Peinture'
                lien='/peinture'
                imageSrc='./images/peinture.png'
                imageAlt='peinture'
              />
              <PrestationImg
                titre='Electricité'
                lien='/electricite'
                imageSrc='./images/electricite.png'
                imageAlt='electricite'
              />
            </div>
          </div>

          <div className='prestations-container grid grid-cols-3'>
            <div className="contact-container">
              <div className="contact">
                <p>Une question ? Un devis ?</p>
                <Link href="/contact">CONTACTEZ-NOUS</Link>
              </div>
            </div>
            <div className="prestations-img-container col-span-2">
              <PrestationImg
                titre='Revêtement mural et sol'
                lien='/revetement'
                imageSrc='./images/revetement.jpeg'
                imageAlt='revetement'
              />
              <PrestationImg
                titre='Ravalement'
                lien='/ravalement'
                imageSrc='./images/ravalement.jpg'
                imageAlt='ravalement'
              />
              <PrestationImg
                titre='Maçonnerie'
                lien='/maconnerie'
                imageSrc='./images/maconnerie.png'
                imageAlt='maçonnerie'
              />
            </div>
          </div>
        </article>

        <article className="engagement-container">
          <h2 className="engagement-title">NOS ENGAGEMENTS</h2>
          <div className='vignette-container grid grid-cols-2'>
            <Vignette
              titre="UN INTERLOCUTEUR UNIQUE"
              text="Votre projet sera suivi et géré  par une seule et même personne tout le long de la réalisation de votre chantier."
              imageSrc="./images/support.png"
              imageAlt="support"
            />
            <Vignette
              titre="DEVIS RAPIDE"
              text="Votre devis est réalisé en 48h après visite du chantier par votre chargé d’affaire. Devis gratuit et sans engagement."
              imageSrc="./images/devis.png"
              imageAlt="devis"
            />
            <Vignette
              titre="CONSTRUCTION DU PROJET"
              text="Ensemble nous construisons votre projet pour que vos envies deviennent une réalité."
              imageSrc="./images/handshake.png"
              imageAlt="handshake"
            />
            <Vignette
              titre="ASSURANCE"
              text="Assurances décennales garantissant votre chantier."
              imageSrc="./images/bank.png"
              imageAlt="bank"
            />
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
