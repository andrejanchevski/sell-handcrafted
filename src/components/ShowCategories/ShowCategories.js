import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "react-aux";
import CategoryList from "../../UI/CategoryList/CategoryList";
import CategoryListItem from "../../UI/CategoryList/CategoryListItem/CategoryListItem";
import * as actions from '../../store/actions/generalActions'

const categoriesMain=[
    {id:1,name:"Clothing&Shoes",superCategory:null},
    {id:5,name:"Men",superCategory:1},
    {id:14,name:"T-shirts",superCategory:5},
    {id:15,name:"Jeans",superCategory:5},
    {id:16,name:"Hoodies",superCategory:5},
    {id:6,name:"Woman",superCategory:1},
    {id:17,name:"T-shirts",superCategory:6},
    {id:18,name:"Hoodies",superCategory:6},
    {id:7,name:"Kids",superCategory:1},
    {id:2,name:"Accessories",superCategory: null},
    {id:8,name:"Wallets",superCategory:2},
    {id:9,name:"Sunglasses",superCategory:2},
    {id:10,name:"Bags",superCategory:2},
    {id:3,name:"Jewellry",superCategory: null},
    {id:11,name:"Rings",superCategory: 3},
    {id:12,name:"Necklace",superCategory: 3},
    {id:13,name:"Earrings",superCategory: 3},
    {id:4,name:"Home",superCategory: null},
];

class ShowCategories extends Component{

    state={
        lista:null
    };

    renderChild=(child)=>{
        if (child.children && child.children.length!==0) {
            return (
                <Aux>
                    <CategoryListItem catName={child.name} key={child.id}/>
                    <CategoryList>
                        {child.children.map(item => {
                            return this.renderChild(item);
                        })}
                    </CategoryList>
                </Aux>

            );
        }
        else if (child.name!=="") {
            return <CategoryListItem key={child.id} catName={child.name}/>;
        }
        return null;

    };
    componentDidMount() {

        let newCat=[];
        categoriesMain.forEach(node=>{
            if(!node.superCategory) return newCat.push(node);
            const parentIndex=categoriesMain.findIndex(el=>el.id===node.superCategory);
            if(!categoriesMain[parentIndex].children){
                return categoriesMain[parentIndex].children=[node]
            }
            categoriesMain[parentIndex].children.push(node)
        });
        this.props.setCategoriesAsTree(newCat);
        console.log("mounted");
        console.log(this.props);
        let niza=this.props.match.url.split("/");
        if(niza[niza.length-1]==="All"){
            let podLista=newCat.map((el)=>{
                return <CategoryListItem key={el.id} catName={el.name} justOne/>
            });
            this.setState({lista:<CategoryList>{podLista}</CategoryList>})
        }else if(niza[niza.length-1]!=="All"){
                let chosenItem=newCat.filter((value)=>value.name===niza[niza.length-1]);
                let lista=<CategoryList>{this.renderChild(chosenItem[0])}</CategoryList>;
                this.setState({lista:lista})
        }

        //else{
        //     console.log(this.props.categories);
        //     let chosenItem=this.props.categories.filter((value)=>value.name===niza[niza.length-1]);
        //     console.log(chosenItem);
        //     let lista=<CategoryList>{this.renderChild(chosenItem[0])}</CategoryList>;
        //     this.setState({lista:lista})
        // }
    }

    render() {
        return (
            <div className="mt-3">
                {this.state.lista}
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
