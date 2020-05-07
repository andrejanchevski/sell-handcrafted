import React from "react";
import Aux from "react-aux";
import styles from './ShopPolicies.module.css'


const ShopPolicies=(props)=>{
    return(
        <Aux>
            <div className="row">
                <div className="col-3">
                    <p>Shop policies</p>
                </div>
                <div className="col-9 border-bottom">
                    <p className={styles.Color}> Last updated on 31 August 2019</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3">
                    <p>Shipping</p>
                </div>
                <div className="col-9">
                    <p className="m-0">Processing time</p>
                    <p className={styles.Color}>The time I need to prepare an order for shipping varies. For details, see
                        individual items.</p>

                    <p className="m-0">Customs and import taxes</p>
                    <p className={styles.Color}>Buyers are responsible for any customs and import taxes that may apply.
                        I'm not responsible for delays due to customs.</p>

                </div>
            </div>
        </Aux>
    )
};

export default ShopPolicies;