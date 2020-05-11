import React from "react";
import Button from "../../../UI/Button/Button";


const ContactForm=()=>{
    return(
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="FullName"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputNumber1" aria-describedby="nameHelp" placeholder="PhoneNumber"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <Button type="dark" use="submit" size="large">Submit</Button>
        </form>
    )
};

export default ContactForm;
