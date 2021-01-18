import React from "react";


function SearchForm(props){

    return (
        <div>
          <form>
            <input
                className="form-control"
                type="text"
                placeholder="Search employees by state"
                name="search"
                value={props.value}
                onChange={props.handleInputChange}
              />
          </form>
        </div>
    );
  }

export default SearchForm;
