import React,{Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from './Carousel.module.css'
import CarouselInner from './CarouselItem/CarouselInner'

class CarouselElem extends Component{
    state={
        categories:[
            {name:"Clothing",customText:"New Arrivals", dviziNaslov:"rotateInDownLeft",dviziKopce:"lightSpeedIn",dviziP:"fadeInUp"},
            {name:"Accessories",customText:"New Arrivals", dviziNaslov:"fadeInUp",dviziKopce:"bounceIn",dviziP:"fadeInDown"},
            {name:"Outlet",customText:"Sale", dviziNaslov:"fadeInUp",dviziKopce:"bounceIn",dviziP:"fadeInDown"},
        ]

    };
    render() {
        const elementi = this.state.categories.map((el,index)=>{
            return <Carousel.Item key={index}> <CarouselInner title={el.name} customText={el.customText} dviziNaslov={el.dviziNaslov} dviziP={el.dviziP} dviziKopce={el.dviziKopce}/> </Carousel.Item>
        });
        return (
            <div className="container-fluid mt-3">
                <Carousel className={classes.Carousel}>
                    {elementi}
                </Carousel>
            </div>
        )
    }


};

export default CarouselElem;