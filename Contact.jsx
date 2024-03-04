import React, { useRef } from 'react';
import '../CSS/Contact.css';
import emails from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emails.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
        })
            .then(
                ((result) => {
                    console.log(result.text);
                },
                    (error) => {
                        console.log(error.text);
                    }));
    }

        return (
            <div className='Join'>
                <div className='left-j'>
                    <hr />
                    <div>
                        <span>BİZİMLE BİRLİKTE SPOR YAPMAYA VAR MISIN?</span>
                    </div>
                </div>
                <div className='right-j'>
                    <form ref={form} className='email-container' onSubmit={sendEmail}>
                        <input type='email'
                            name='user_mail'
                            placeholder='Lütfen mail adresinizi girin' />
                        <button className='btn btn-j'>Şimdi Katıl</button>
                    </form>
                </div>
            </div>
        );  
}

export default Contact;