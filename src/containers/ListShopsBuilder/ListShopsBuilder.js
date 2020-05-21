import React,{Component} from "react";
import NavAllShops from "../../components/NavAllShops/NavAllShops";
import AllShops from "../../components/AllShops/AllShops";
import styles from './ListShopsBuilder.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/generalActions'
class ListShopsBuilder extends Component{


    componentDidMount() {


        console.log(sessionStorage)
       if(sessionStorage.getItem('filters')!==null){
           let page=parseInt(JSON.parse(sessionStorage.getItem('filters')).pageFilterForShops)
           this.props.getShopsFromFilters(page)
       }else{
           this.props.getAllShops();
       }

    }
    render() {

        let klasi=["container",styles.Content];
        return (
            <div className={klasi.join(" ")}>
                <div className="row">
                    <NavAllShops/>
                    <AllShops/>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        shops:state.allShopsReducer.shops,
        totalPages:state.allShopsReducer.totalPages
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllShops:()=>dispatch(actions.getAllShops()),
        getShopsFromFilters:(page)=>dispatch(actions.getShopsFromFilters(page))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListShopsBuilder);