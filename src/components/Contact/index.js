import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value});

        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value});
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
    
    return(
        <section className='contact-me'>
             <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  
                    <input type="text" 
                    defaultValue={name} 
                    onBlur={handleChange} 
                    name="name" 
                    placeholder="Enter Your Name"
                    />
                </div>
                <div>
                  
                    <input type="email" 
                    name="email" 
                    defaultValue={email} 
                    onBlur={handleChange}
                    placeholder="Enter Your Email Address"
                    />
                </div>
                <div>
                
                    <textarea name="message" 
                    defaultValue={message} 
                    onBlur={handleChange} 
                    rows="5" 
                    placeholder="Type your Message Here"
                    />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;