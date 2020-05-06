import React,{useState} from "react";
import styles from '../CreateProductForm.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/generalActions'



const PhotosBlock=(props)=>{
    let tempNiza=[styles.Content,"col"];
    const [addedPrimaryPhoto,setPrimaryPhotoAdded]=useState(false);
    const [addedLeftAngle,setLeftAngle]=useState(false);
    const [addedRightAngle,setRightAngle]=useState(false);
    const [addedDetailsPhoto,setDetailsPhoto]=useState(false);
    const [addedInUsePhoto,setInUsePhoto]=useState(false);
    const [addedScenePhoto,setScenePhoto]=useState(false);
    let textPrimary;
    let textLeftAngle;
    let textRightAngle;
    let textDetails;
    let textInUse;
    let textScene;
    if(addedPrimaryPhoto){
        textPrimary=<div className="text-center">Profile Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else{
        textPrimary=<div className="text-center">Upload Primary Photo</div>
    }
    if(addedLeftAngle){
        textLeftAngle=<div className="text-center">Left Angle Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else{
        textLeftAngle=<div className="text-center">Upload Left Angle Photo</div>
    }
    if(addedRightAngle){
        textRightAngle=<div className="text-center">Right Angle Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else
    {
        textRightAngle=<div className="text-center">Upload Right Angle Photo</div>
    }
    if(addedDetailsPhoto){
        textDetails=<div className="text-center">Details Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else
    {
        textDetails=<div className="text-center">Upload Details Photo</div>
    }

    if(addedInUsePhoto){
        textInUse=<div className="text-center">In Use Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else{
        textInUse=<div className="text-center">Upload In Use Photo</div>
    }

    if(addedScenePhoto){
        textScene=<div className="text-center">Scene Picture Added<FontAwesomeIcon icon={faCheck}/></div>
    }else{
        textScene=<div className="text-center">Upload Scene Photo</div>
    }

    const primaryPhotoAdded=(event)=>{
        // debugger;
        // let fd=new FormData();
        // fd.append('formData',event.target.files[0]);

        props.onPrimaryPhotoAdded(event.target.files[0]);
        setPrimaryPhotoAdded(true);
    };
    const leftAnglePhotoAdded=(event)=>{
        props.onLeftAnglePhotoAdded(event.target.files[0]);
        setLeftAngle(true);
    };
    const rightAnglePhotoAdded=(event)=>{
        props.onRightAnglePhotoAdded(event.target.files[0]);
        setRightAngle(true)
    };
    const detailPhotoAdded=(event)=>{
        props.onDetailsPhotoAdded(event.target.files[0]);
        setDetailsPhoto(true)
    };
    const inUsePhotoAdded=(event)=>{
        props.onInUsePhotoAdded(event.target.files[0]);
        setInUsePhoto(true);
    };

    const scenePhotoAdded=(event)=>{
        setScenePhoto(true)
    };



    return (
        <div className={styles.Block}>
            <div className="row">
                <div className="col-3">
                    <h4>Photos</h4>
                    <p>Let's make it beautiful</p>
                    <p className={styles.SmallText}>Insert up to 3 photos so you can represent the product the right way</p>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={primaryPhotoAdded}
                                id="file"
                                accept="image/*"/>
                            <label htmlFor="file">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textPrimary}
                        </div>
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={leftAnglePhotoAdded}
                                id="file1"
                                accept="image/*"/>
                            <label htmlFor="file1">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textLeftAngle}
                        </div>
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={rightAnglePhotoAdded}
                                id="file2"
                                accept="image/*"/>
                            <label htmlFor="file2">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textRightAngle}
                        </div>
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={detailPhotoAdded}
                                id="file3"
                                accept="image/*"/>
                            <label htmlFor="file3">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textDetails}
                        </div>
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={inUsePhotoAdded}
                                id="file4"
                                accept="image/*"/>
                            <label htmlFor="file4">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textInUse}
                        </div>
                        <div className={tempNiza.join(" ")}>
                            <input
                                type="file"
                                onChange={scenePhotoAdded}
                                id="file5"
                                accept="image/*"/>
                            <label htmlFor="file5">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="lg"/>
                            </label>
                            {textScene}
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
};

const mapStateToProps=(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        onPrimaryPhotoAdded:(primaryPhoto)=>dispatch(actions.addPrimaryPhoto(primaryPhoto)),
        onLeftAnglePhotoAdded:(leftAnglePhoto)=>dispatch(actions.addLeftAngle(leftAnglePhoto)),
        onRightAnglePhotoAdded:(rightAnglePhoto)=>dispatch(actions.addRightAngle(rightAnglePhoto)),
        onDetailsPhotoAdded:(detailPhoto)=>dispatch(actions.addDetailsPhoto(detailPhoto)),
        onInUsePhotoAdded:(inUsePhoto)=>dispatch(actions.addInUsePhoto(inUsePhoto)),
        onScenePhotoAdded:(scenePhoto)=>dispatch(actions.addScenePhoto(scenePhoto)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PhotosBlock);
