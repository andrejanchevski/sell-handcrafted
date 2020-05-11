import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Animated} from "react-animated-css";
import './CarouselInner.css'
import Button from "../../Button/Button";
import Aux from "react-aux"
import {withRouter} from "react-router-dom";

const carouselInner = (props)=>{
    const onClickHandler=(event,to)=>{
        event.preventDefault();
        props.history.push("/categories/"+to)
    };
    return (
        <Aux>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1920x570"
                    alt="First slide"
                />
                <Carousel.Caption className="CarouselCaptions">
                    <Animated
                        animationIn="rotateInDownLeft"
                        isVisible={true}>
                        <p className="smallText">{props.title}</p>
                    </Animated>
                    <Animated
                        animationIn="lightSpeedIn"
                        isVisible={true}>
                        <p className="bigText">New Arrivals</p>
                    </Animated>
                    <Animated
                        animationIn="fadeInUp"
                        isVisible={true}>
                        <Button type="light" size="large" clicked={(event)=>onClickHandler(event,props.title)}>Shop Now</Button>
                    </Animated>
                </Carousel.Caption>
        </Aux>
    )
};


export default withRouter(carouselInner);