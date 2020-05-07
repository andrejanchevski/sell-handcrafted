import React from "react";

import Button from "../../../UI/Button/Button";


const InsertReviewForm = (props)=>{

    return(
        <div>
            <div className="card my-4">
                <h5 className="card-header">Leave a Review:</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <Button type="dark" use="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default InsertReviewForm