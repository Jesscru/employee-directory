import React from "react";
import Button from "react-bootstrap/Button";
import "../styling/SearchForm.css";


function SearchForm(props){

    return (
        <div>
          <form>
            <input
                id="filter"
                className="form-control"
                type="text"
                placeholder="Filter by last name"
                name="filter"
                value={props.value}
                onChange={props.handleInputChange}
              />
            <Button 
              className="filter-btn"
              variant="outline-primary" 
              onClick={props.handleFormSubmit}> Filter
            </Button>

            <Button 
              className="sort-btn"
              variant="outline-primary" 
              onClick={props.handleSort}>Sort by last name
            </Button>

          </form>
        </div>
    );
  }

export default SearchForm;
