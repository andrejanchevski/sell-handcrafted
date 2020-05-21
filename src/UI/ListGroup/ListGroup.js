import React from "react";
import {ListGroup} from "react-bootstrap";


const listGroup =(props)=>{


    let items=props.items.map((el,index)=>{
        return <ListGroup.Item key={index}>{el.categoryName}</ListGroup.Item>
    });
    return(
        <ListGroup className="mt-3">
            <ListGroup.Item>All</ListGroup.Item>
            {items}
        </ListGroup>
    )
};

export default listGroup;