import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function SortDrop(props){
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.handleStateSort} href="#/action-1">State</Dropdown.Item>
                    <Dropdown.Item onClick={props.handleNameSort}href="#/action-2"> Last name</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default SortDrop;