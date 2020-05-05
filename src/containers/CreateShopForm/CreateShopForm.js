import React,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import styles from './CreateShopForm.module.css'
import Select from 'react-select'
import {connect} from "react-redux";
import * as actions from "../../store/actions/generalActions";
import Button from "../../UI/Button/Button";
const options=[
    {value:"Clothing&Shoes",label:"Clothing&Shoes"},
    {value:"Accesories",label:"Accesories"},
    {value:"Jewellery",label:"Jewellery"},
    {value:"Home",label:"Home"},

];
class CreateShopForm extends Component{


    state={
        addedProfilePicture:false,
        addedCoverPhoto:false,
    };
    inputNameHandler=(event)=>{
        this.props.onShopNameTyping(event.target.value);
    };
    inputShortDescHandler=(event)=>{
        this.props.onShopDescTyping(event.target.value)
    };
    selectCategoryHandler=(selectedItem)=>{
        this.props.onCategorySelected(selectedItem);

    };

    inputUTNHandler=(event)=>{
        this.props.onUTNTyping(event.target.value)

    };

    profilePictureChosen=(event)=>{
        this.props.onProfilePictureAdd(event.target.files[0]);
        this.setState({addedProfilePicture:true});
    };

    coverPhotoChosen=(event)=>{
        this.props.onCoverPhotoAdd(event.target.files[0]);
        this.setState({addedCoverPhoto:true});
    };

    inputBAHandler=(event)=>{
        this.props.onBATyping(event.target.value);
    };



    formSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("Done")

    };
    render() {
        let niza=[styles.Block1,"mt-5"];
        let text1;
        let text2;
        let disabled=true;
        if(this.state.addedProfilePicture){
            text1=<div className="text-center">Profile Picture Added<FontAwesomeIcon icon={faCheck}/></div>
        }else
        {
            text1=<div className="text-center">Upload Profile Picture</div>
        }
        if(this.state.addedCoverPhoto){
            text2=<div className="text-center">Cover Photo Added<FontAwesomeIcon icon={faCheck}/></div>
        }else
        {
            text2=<div className="text-center">Upload CoverPhoto</div>
        }



        disabled = this.props.shopName.trim() !== "" && this.props.shopCategory!==undefined && this.state.addedProfilePicture;


        return (
            <div className={styles.Background}>

                <form action="" onSubmit={this.formSubmitHandler}>
                    <div className={styles.Block1}>
                        <p>Basic Shop Information</p>
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="exampleInputName" className="mr-3 float-right">Shop Name</label>
                            </div>
                            <div className="col">
                                <input  type="text"
                                        className="form-control w-50 "
                                        id="exampleInputName"
                                        onChange={this.inputNameHandler}
                                        aria-describedby="nameHelp"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="exampleInputDescription" className="mr-3 float-right">Short Description</label>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    onChange={this.inputShortDescHandler}
                                    className="form-control w-50"
                                    id="exampleInputDescription"
                                    aria-describedby="descriptionHelp"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="exampleInputDescription" className="mr-3 float-right">Main Category</label>
                            </div>
                            <div className="col">
                                <Select
                                    options={options}
                                    onChange={this.selectCategoryHandler}
                                    className="w-50"/>
                            </div>
                        </div>
                    </div>

                    <div className={niza.join(" ")}>
                        <p>Show Your Style</p>
                        <div className="row">
                            <div className="col">

                                <div className={styles.Content}>
                                    <input
                                        type="file"
                                        onChange={this.profilePictureChosen}
                                        id="file"
                                        accept="image/*"/>
                                    <label htmlFor="file">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                                    </label>
                                    {text1}
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.Content}>
                                    <input
                                        type="file"
                                        onChange={this.coverPhotoChosen}
                                        id="file1" accept="image/*"/>
                                    <label htmlFor="file1">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                                    </label>
                                    {text2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={niza.join(" ")}>
                        <p>Billing Information</p>
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="exampleInputName" className="mr-3 float-right">Shop BankAccountNumber</label>
                            </div>
                            <div className="col">
                                <input  type="text"
                                        className="form-control w-50 "
                                        id="exampleInputName"
                                        onChange={this.inputBAHandler}
                                        aria-describedby="nameHelp"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="exampleInputDescription" className="mr-3 float-right">Shop UTN</label>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    onChange={this.inputUTNHandler}
                                    className="form-control w-50"
                                    id="exampleInputDescription"
                                    aria-describedby="descriptionHelp"/>
                            </div>
                        </div>
                    </div>
                    <Button type="dark" size="large" push use="submit" disabled={!disabled} >Save and Continue</Button>

                </form>
            </div>
        )
    }

}

const mapStateToProps=state=>{
    return{
        shopName:state.createShopReducer.shopName,
        shopDesc:state.createShopReducer.shortDesc,
        shopCategory:state.createShopReducer.mainCategory,
        shopUTN:state.createShopReducer.shopUTN,
        shopBA:state.createShopReducer.shopBankAccountNumber,
        shopProfilePicture: state.createShopReducer.shopProfilePicture,
        shopCoverPhoto: state.createShopReducer.shopCoverPhoto
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onShopNameTyping:(shopName)=>dispatch(actions.addShopName(shopName)),
        onShopDescTyping:(shopDesc)=>dispatch(actions.addShopDesc(shopDesc)),
        onCategorySelected:(shopCategory)=>dispatch(actions.addShopCategory(shopCategory)),
        onUTNTyping:(shopUTN)=>dispatch(actions.addShopUTN(shopUTN)),
        onBATyping:(shopBA)=>dispatch(actions.addShopBA(shopBA)),
        onProfilePictureAdd:(profilePicture)=>dispatch(actions.addShopProfilePicture(profilePicture)),
        onCoverPhotoAdd:(coverPhoto)=>dispatch(actions.addShopCoverPhoto(coverPhoto))

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(CreateShopForm);