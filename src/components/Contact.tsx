import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap";
import contactImg from '../assets/img/Contact.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact()
{
    const form : any = useRef();

    const sendEmail = (e : any) => {
        setStatus({ success: true, message: ""})
        e.preventDefault();
    
        
        emailjs.sendForm('service_vkuqhob', 'template_w7hmc7g', form.current, 'n03AZHgI1-KLklvY4')
          .then((result) => {
             setStatus({ success: true, message: "Message has been sent successfully."})
             setBtnText("Disabled");
          }, (error) => {
             setStatus({ success: false, message: "Message was not sent."});
          });
      };

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [status, setStatus] = useState({ success: false, message: ''});
    const [btnText, setBtnText] = useState('Send');

    const onFormUpdate = (category: string, value: any) =>
    {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }




    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="image" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="Text" name="to_name" pattern="[a-zA-Z]+\s*" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                     <input type="Text" value={formDetails.lastName} pattern="[a-zA-Z\-\s]+\s*" max="20" required name="to_name2" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" pattern="\w+@.+\.com" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                     <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}" required name="contact_number" value={formDetails.phone} placeholder="Phone No" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                   <textarea rows={6} name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                   <button disabled={status.success === true ? true : false} type="submit"><span>{btnText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Row>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Row>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;