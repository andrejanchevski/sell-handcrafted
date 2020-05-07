import React from "react";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import styles from '../Header/Header.module.css'
const Header=(props)=>{
    let niza=["container-fluid",styles.Content];
    return (
        <header>
            <div className={niza.join(" ")}>
                <div className="row bg-light">
                    <SocialIcons space="small"/>
                    <div className="col text-center align-self-center">
                        <span className={styles.smallHeaderText}>
                            Shipping deals different with each shop
                        </span>
                    </div>
                    <div className="col-md-auto text-center align-self-center">
                        <div className="row text-center align-self-center">
                            <div className="col-md-auto">
                                <span className={styles.smallHeaderText}>
                                    sellhandcrafted@example.com
                                </span>
                            </div>
                            <div className="col-md-auto">
                                <select className="bg-light">
                                    <option>EUR</option>
                                    <option>DEN</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </header>

    )
};


export default Header