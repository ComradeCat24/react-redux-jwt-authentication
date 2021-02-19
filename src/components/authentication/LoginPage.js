import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/auth";

const LoginPage = ({ loginUser, history }) => {
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

    await loginUser(email, password);
    history.push("/");
  };

  return (
    <div>
      <h1>Login page</h1>
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
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);
