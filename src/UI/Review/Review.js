import React from "react";


const Review=(props)=>{

    let niza=["media","mb-4"];
    if(!props.show){
        niza.push("mt-5")
    }

    return(
            <div className={niza.join(" ")}>
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                    <div className="media-body">
                        <h5 className="mt-0">{props.name}</h5>
                        {props.commentar}
                    </div>
            </div>
    )

};

export default Review;