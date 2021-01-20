import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsTable from "./ResultsTable";
import API from "../utils/API";
import Header from "./Header";


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
  
  // allows the input field to be entered and sets the value of the field to whatever is being typed in  
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };

  // filters employees by state entered in input field 
  handleFormSubmit = event => {
    event.preventDefault();
    const filterState = document.querySelector("#filterInput").value;
    const filtered = this.state.people.filter(person => person.location.state === filterState);
    this.setState({
        names: filtered
    });
};

  // resets the search results after a previous search
  handleReset = event => {
    event.preventDefault();
    this.setState({
      names: this.state.people
    });
    document.querySelector("#filterInput").value = "";
};
  
// sorts the people by their names
  handleNameSort = event => {
    this.setState({
      names: this.state.names.sort((a,b) => a.name.last.localeCompare(b.name.last))
    });
  }
  
  // sorts the people by the state they live in 
  handleStateSort = event => {
      this.setState({
        names: this.state.names.sort((a,b) => a.location.state.localeCompare(b.location.state))
    });
  }

  render() {
    return (
        <div>
          <Header />
            <SearchForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              locations={this.state.locations}
              handleReset={this.handleReset}/>   
            <ResultsTable 
              names={this.state.names}
              people={this.state.people}
              handleNameSort={this.state.handleNameSort}
              handleStateSort={this.state.handleStateSort}/>
        </div>
      );
    }
  }

export default Container;
