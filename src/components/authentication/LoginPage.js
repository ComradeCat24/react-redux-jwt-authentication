import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser, userData } from "../../redux/actions/auth";

const LoginPage = ({ loginUser, userData, history, errMsg }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const login = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    await loginUser(email, password, () => {
      userData();
      history.push("/");
    });
  };

  return (
    <div>
      <h1>Login page</h1>

      {errMsg && (
        <pre>{JSON.stringify(errMsg, null, "\b").replace(/{|}/g, "")} </pre>
      )}
      <form onSubmit={login}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errMsg: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    errMsg: state.auth.errMsg,
  };
};

const mapDispatchToProps = {
  loginUser,
  userData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
