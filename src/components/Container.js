import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsTable from "./ResultsTable";
import API from "../utils/API";
import Header from "./Header";


class Container extends Component {
    state = {
      people: [],
      search: ""
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
      this.getPeople();
    }
  
    getPeople = query => {
      API(query)
        .then(res => {
          this.setState({ people: res.data.results })
          console.log(this.state.people);
        })
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
  
  
  render() {
    return (
        <div>
          <Header />
            <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange} />
                
            <ResultsTable people={this.state.people}/>

        </div>
      );
    }
  }

export default Container;
