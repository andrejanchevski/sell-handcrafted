import React from "react";
import Aux from "react-aux";
import styles from './Contact.module.css'
import ContactForm from "./ContactForm/ContactForm";

const Contact=()=>{
    let nizaKlasi=[styles.Content,"container","mt-5"];
    return(
        <Aux>
            <div className={nizaKlasi.join(" ")}>
                <div className="row">
                    <div className="col">
                        MAPA
                    </div>
                    <div className="col">
                        <h3>Send us a message</h3>
                        <ContactForm/>
                    </div>

                </div>
            </div>

        </Aux>
    )
};

export default Contact;
