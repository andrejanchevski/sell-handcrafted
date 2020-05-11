import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "react-aux";
import CategoryList from "../../UI/CategoryList/CategoryList";
import CategoryListItem from "../../UI/CategoryList/CategoryListItem/CategoryListItem";
import * as actions from '../../store/actions/generalActions'
import styles from './ShowCategories.module.css'


class ShowCategories extends Component{


    renderChild=(child)=>{
        if (child.children && child.children.length!==0) {
            return (
                <Aux>
                    <CategoryListItem catName={child.name} id={child.id} key={child.id}/>
                    <CategoryList>
                        {child.children.map(item => {
                            return this.renderChild(item);
                        })}
                    </CategoryList>
                </Aux>

            );
        }
        else if (child.name!=="") {
            return <CategoryListItem key={child.id} id={child.id} catName={child.name}/>;
        }
        return null;

    };
    componentDidMount() {

    }

    render() {
        let nizaKlasi=["mt-3",styles.Content];
        let lista=null;
        if(this.props.categories.length!==0){
            let niza=this.props.location.pathname.split("/");
            if(niza[niza.length-1]==="All"){
                let podlista=this.props.categories.map(el=>{
                    return <CategoryListItem catName={el.name}  id={el.id} key={el.id}/>
                });
                lista=<CategoryList>{podlista}</CategoryList>
            }else if(niza.length>3){
                let chosenItem=this.props.categories.filter((value)=>value.name===niza[3]);
                lista=<CategoryList>{this.renderChild(chosenItem[0])}</CategoryList>;
            }else if(niza.length===3 && niza[niza.length-1]!=="All"){
                let chosenItem=this.props.categories.filter((value)=>value.name===niza[2]);
                lista=<CategoryList>{this.renderChild(chosenItem[0])}</CategoryList>;
            }
        }
        return (
            <div className={nizaKlasi.join(" ")}>
                {lista}
            </div>
        )
    }


}


const mapStateToProps=(state)=>{
    return {
        categories:state.categoryReducer.categories
    }

};

const mapDispatchToProps=(dispatch)=>{
    return {
        setCategoriesAsTree:(categories)=>dispatch(actions.setCategoriesAsTree(categories))

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ShowCategories));
