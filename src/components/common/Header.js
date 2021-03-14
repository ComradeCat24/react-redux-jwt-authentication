import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";

const Header = ({ accessToken, logoutUser }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await logoutUser();
    history.push("/login");
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      {accessToken ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          {" | "}
          <NavLink to="/logout" onClick={handleLogout}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          {" | "}
          <NavLink to="/signup">SignUp</NavLink>
        </>
      )}
    </nav>
  );
};

Header.propTypes = {
  accessToken: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken,
  };
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
