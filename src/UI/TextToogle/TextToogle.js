import React, {useContext, useState} from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/auth-context";
import {connect} from 'react-redux'

const TextToogle =(props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const authContext=useContext(AuthContext);
    let content=null;
    if(props.title==="Description"){
        content=props.productDescription;
    }else if(props.title==="Materials")
    {
        content=authContext.materials
    }

    return (
        <div>
            {/*<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>*/}
            <div className="mt-4">
                <div className="btn" role="button" aria-expanded="false" aria-controls="collapseExample">
                    {props.title}
                </div>
                <button className="btn float-right" type="button" aria-expanded="false" aria-controls="collapseExample" onClick={toggle}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {content}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
};
const mapStateToProps=(state)=>{
    return {
        productDescription:state.productReducer.productDescription
    }
};
export default connect(mapStateToProps)(TextToogle);