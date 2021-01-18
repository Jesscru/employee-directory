import React from "react";
import Table from "react-bootstrap/Table";
import "../styling/ResultsTable.css"

function ResultsTable(props){

   return (
      <div>
          <Table striped bordered hover size="sm" className="table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
            {props.people.map(person => (
                <tr key={person.login.uuid}>
                    <td><img src={person.picture.medium} alt="profile of employee"></img></td>
                    <td>{person.name.first} {person.name.last}</td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>{person.location.state}</td>
                </tr>
                ))}
            </tbody>
        </Table>
      </div>
  );
}


export default ResultsTable;
