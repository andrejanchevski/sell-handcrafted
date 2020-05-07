import React from "react";
import Select from "react-select";
import Aux from "react-aux";
const SelectCustomized=(props)=> {

    return (
        <Aux>
            <div className="col-3 d-flex align-items-center mt-3">
                    <p>{props.title}</p>
            </div>
            <div className="col-9">
                <Select
                    value={props.selectedOption}
                    onChange={props.onSelect}
                    options={props.options}
                />
                </div>
            </Aux>

        );

};

export default SelectCustomized;