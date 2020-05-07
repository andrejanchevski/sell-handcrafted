import React from "react";
import {NavDropdown} from "react-bootstrap";
import styles from '../Toolbar.module.css'



// <div className="dropdown-item d-flex justify-content-center mt-1">
//     <img src="https://via.placeholder.com/100" className="img-fluid rounded mr-1" alt="">
//         <div>
//             <p className="cartTextStyle">White Linen Shirt</p>
//             <p className="cartSubTextStyle">1 x $119</p>
//         </div>
// </div>
const NavBarDropDownCardItem=(props)=>{
    return(
        <NavDropdown.Item href="#action/3.1">
            <div className="d-flex justify-content-center mt-1">
                <img src="https://via.placeholder.com/100" className="img-fluid rounded mr-1" alt=""/>
                <div>
                    <p className={styles.CartTitleItem}>{props.name}</p>
                    <p className={styles.CartPriceItem}>${props.price}</p>
                </div>
            </div>
        </NavDropdown.Item>
    )



};

export default NavBarDropDownCardItem;