import React from "react";
import classes from './Description.module.css'
import Button from "../../UI/Button/Button";
import {withRouter} from "react-router-dom";

const Description = (props)=>(

    <div className={classes.Background}>
        <div className="row pt-5 mr-0">
            <div className="col"/>
            <div className="col text-center"><h2>What is SellMe?</h2></div>
            <div className="col"/>
        </div>
        <div className="row mt-4 mr-0">
            <div className="col ml-3">
                <h3 className="text-center">A one of a kind community</h3>
                <p className="text-center">Sell me is a global online marketplace,where people come
                    together to make,sell, buy,and collect unique items.</p>
            </div>
            <div className="col">
                <h3 className="text-center">Support independent creators</h3>
                <p className="text-center">We dont'have a ware house - just millions of people selling the
                    thing they love. We just make the process of selling easy </p>
            </div>
            <div className="col">
                <h3 className="text-center">Peace of mind</h3>
                <p className="text-center">Your privaciy is our highest priority. Just enjoy shopping </p>
            </div>
        </div>
        <div className="row pt-5 pb-4 mr-0">
            <div className="col"/>
            <div className="col text-center">
                <h5 className="zaContact mb-3">Have a question? Well we got some answers!</h5>
                <Button type="dark" clicked={(event)=>{event.preventDefault();props.history.push("/contact")}}>Contact Us</Button>
            </div>
            <div className="col"/>
        </div>

    </div>
);

export default withRouter(Description);