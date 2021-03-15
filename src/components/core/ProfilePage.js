import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userData } from "../../redux/actions/auth";
class ProfilePage extends Component {
  async componentDidMount() {
    await this.props.userData();
  }

  render() {
    return (
      <>
        <h1>Profile page</h1>
        <p>Only logged in users should see this</p>
        <br />
        <pre>{JSON.stringify(this.props.profileData, null, "\b")}</pre>
      </>
    );
  }
}

ProfilePage.propTypes = {
  userData: PropTypes.func.isRequired,
  profileData: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    profileData: state.auth.profileData,
  };
};

const mapDispatchToProps = {
  userData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
