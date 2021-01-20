import React from "react";
import Button from "react-bootstrap/Button";
import SortDrop from "./SortDrop";
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
              <datalist id="states">
                  {this.state.states.map(state => (
                      <option value={state} key={state}></option>
                  ))}
              </datalist>

            <SortDrop 
              handleNameSort={props.handleNameSort}
              handleStateSort={props.handleStateSort}/>

            <Button 
              className="filter-btn"
              variant="outline-primary" 
              onClick={props.handleFormSubmit}> Filter
            </Button>

            <Button 
              className="sort-btn"
              variant="outline-primary" 
              onClick={props.handleReset}>Reset
            </Button>

          </form>
        </div>
    );
  }

export default SearchForm;
