import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Animated} from "react-animated-css";
import './CarouselInner.css'
import Button from "../../Button/Button";
import Aux from "react-aux"

const carouselInner = (props)=>{
    return (
        <Aux>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1920x570"
                    alt="First slide"
                />
                <Carousel.Caption className="CarouselCaptions">
                    <Animated
                        animationIn={props.dviziNaslov}
                        isVisible={true}>
                        <p className="smallText">{props.title}</p>
                    </Animated>
                    <Animated
                        animationIn={props.dviziP}
                        isVisible={true}>
                        <p className="bigText">{props.customText}</p>
                    </Animated>
                    <Animated
                        animationIn={props.dviziKopce}
                        isVisible={true}>
                        <Button type="light" size="large">Shop Now</Button>
                    </Animated>
                </Carousel.Caption>
        </Aux>
    )
};


export default carouselInner;