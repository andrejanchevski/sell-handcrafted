import React,{Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from './Carousel.module.css'
import CarouselInner from './CarouselItem/CarouselInner'
import {connect} from 'react-redux'

class CarouselElem extends Component{
    render() {

        const elementi = this.props.categories.slice(0,3).map((el,index)=>{
            return <Carousel.Item key={el.categoryId}> <CarouselInner title={el.categoryName}/> </Carousel.Item>
        });
        return (
            <div className="container-fluid mt-3">
                <Carousel className={classes.Carousel}>
                    {elementi}
                </Carousel>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        categories:state.categoryReducer.categories

    }
};

const mapDispatchToProps=(dispatch)=>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CarouselElem);