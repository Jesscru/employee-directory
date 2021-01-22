import React, { Component } from "react";
import "../styling/Container.css";
import ResultsTable from "./ResultsTable";
import API from "../utils/API";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import SortDrop from "./SortDrop";

class Container extends Component {
    state = {
      people: [],
      names: [],
      search: "",
      locations: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
      };
  
  // when this component mounts, query the database for all of the people
    componentDidMount() {
      this.getPeople();
    }
  
    // api call to the random user api and stores the results in an object
    getPeople = query => {
      API(query)
        .then(res => {
          this.setState({ people: res.data.results })
        })
        .catch(err => console.log(err));
    };

  // filters employees by state entered in input field 
  handleFormSubmit = event => {
    event.preventDefault();
    const filterState = document.querySelector("#filter").value;
    const filtered = this.state.people.filter(person => person.location.state === filterState);
    this.setState({
        people: filtered
    });
  
    console.log(filterState);
  };

  // resets the search results after a previous search
  handleReset = event => {
    event.preventDefault();
    this.setState({
      names: this.state.people
    });
    document.querySelector("#filter").value = "";
};
  
// sorts the people by their names
  handleNameSort = event => {
    this.setState({
      names: this.state.people.sort((a,b) => a.name.last.localeCompare(b.name.last))
    });
  }
  
  // sorts the people by the state they live in 
  handleStateSort = event => {
      this.setState({
        names: this.state.people.sort((a,b) => a.location.state.localeCompare(b.location.state))
    });
  }

  render() {
    return (
        <div>
          <Header />
          <form>
            <input
                id="filter"
                className="form-control"
                type="text"
                placeholder="Filter by last name"
                name="filter" />
              <datalist id="states">
                  {this.state.locations.map(location => (
                      <option value={location} key={location}></option>
                  ))}
              </datalist>

            <SortDrop 
              handleNameSort={this.handleNameSort}
              handleStateSort={this.handleStateSort} />

            <Button 
              className="filter-btn"
              variant="outline-primary" 
              onClick={this.handleFormSubmit}> Filter
            </Button>

            <Button 
              className="sort-btn"
              variant="outline-primary" 
              onClick={this.handleReset}>Reset
            </Button>

          </form>
            
          <ResultsTable 
            names={this.state.names}
            people={this.state.people} />

        </div>
      );
    }
  }

export default Container;
