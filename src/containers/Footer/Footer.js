import React,{Component} from "react";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import './Footer.css'
import SmallList from "../../UI/SmallList/SmallList";
import Button from "../../UI/Button/Button";

class Footer extends Component{
    render() {
        return(
            <footer className="mt-5 mr-0">
                <div className="row mt-5 bg-light pt-5 mr-0">
                    <div className="col mr-0 pl-5 ">
                        <p className="footerTextBig pl-4">GET IN TOUCH</p>
                        <p className="footerTextSmall pl-4">
                            Any questions?Let us know by writing us email or contact us on +389 75 223 468
                        </p>
                        <SocialIcons size="large"/>
                    </div>
                    <div className="col mr-0">
                        <div className="row">
                            <SmallList title="Categories"/>
                            <SmallList title="Links"/>
                        </div>
                    </div>
                    <div className="col mr-0">
                        <p className="footerTextBig">GET IN TOUCH</p>
                        <input type="email" className="form-control mt-4 mb-4 bg-light zaInput w-50" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="email@example.com"/>
                        <Button type="dark">SUBSCRIBE</Button>
                    </div>
                </div>

            </footer>
        )
    }
}


export default Footer;

