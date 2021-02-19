import React, { Component } from "react";
import axiosAPI from "../api/axiosApi";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      gender: "",
      age: "",
    };
  }

  async componentDidMount() {
    await axiosAPI
      .get("auth/profile")
      .then((response) => {
        this.setState(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Profile page</h1>
        <p>Only logged in users should see this</p>
        <br />
        <p>
          <strong>First Name: </strong>
          {this.state.first_name}
        </p>
        <p>
          <strong>Last Name: </strong>
          {this.state.last_name}
        </p>
        <p>
          <strong>Phone Number: </strong>
          {this.state.phone_number}
        </p>
        <p>
          <strong>Birth Date: </strong>
          {this.state.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {this.state.gender}
        </p>
        <br />
        <hr />
        <p>
          <strong>Response Data: </strong>
          {JSON.stringify(this.state)}
        </p>
      </>
    );
  }
}

export default ProfilePage;
