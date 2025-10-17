import React from 'react';

const Page = () => {
    return (
        <main className='contact-main'>
            <div className='contact-container'>
                <h2 className='contact-title'>NOUS CONTACTER</h2>
                <div className='contact-group'>
                    <div className='contact-infos'>
                        <img src="./images/mail.svg" alt="mail" />
                        <p>adresse mail :</p>
                        <p>secretariat@daredartrenovation.fr</p>
                    </div>
                    <div className='contact-infos'>
                        <img src="./images/phone.svg" alt="phone" />
                        <p>téléphone :</p>
                        <p>06 12 96 06 74</p>
                    </div>
                </div>
                <form action="https://formsubmit.co/secretariat@daredartrenovation.fr" method="POST" className='formulaire'>
                    <p>Nous envoyer un message :</p>
                    <div className='input-group'>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className='input'
                            placeholder=''
                            required
                        />
                        <label htmlFor="email" className='placeholder'>email</label>
                    </div>
                    <div className='input-group'>
                        <textarea
                            id="message"
                            name="message"
                            className='input'
                            placeholder=''
                            required
                        />
                        <label htmlFor="message" className='placeholder'>Votre message</label>
                    </div>
                    <button type="submit" className='submit-btn'>
                        Envoyer
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Page;
