import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class ProfilePage extends Component {
  render() {
    let pdata = this.props.profileData;
    return (
      <>
        <h1>Profile page</h1>
        <p>Only logged in users should see this</p>
        <br />
        <p>
          <strong>First Name: </strong>
          {pdata.first_name}
        </p>
        <p>
          <strong>Last Name: </strong>
          {pdata.last_name}
        </p>
        <p>
          <strong>Phone Number: </strong>
          {pdata.phone_number}
        </p>
        <p>
          <strong>Birth Date: </strong>
          {pdata.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {pdata.gender}
        </p>
        <br />
        <hr />
        <p>
          <strong>Response Data: </strong>
          <pre>
            {
              JSON.stringify(this.props.profileData, null, "\b")
              // .replace(
              //   /{|}/g,
              //   ""
              // )
            }
          </pre>
        </p>
      </>
    );
  }
}

ProfilePage.propTypes = {
  profileData: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state.auth.profileData);
  return {
    profileData: state.auth.profileData,
  };
};

export default connect(mapStateToProps)(ProfilePage);
