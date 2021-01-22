import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styling/SortDrop.css";

function SortDrop(props){
    return (
        <div id="width">
            <Dropdown>
                <Dropdown.Toggle className="sort-drop" id="dropdown-basic">
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