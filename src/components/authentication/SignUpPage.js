import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser, loginUser } from "../../redux/actions/auth";

const SignupPage = ({ registerUser, loginUser, history, errMsg }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    profile: {
      first_name: "",
      last_name: "",
      phone_number: "",
      age: "",
    },
  });

  const register = async (event) => {
    event.preventDefault();
    await registerUser(state, () => {
      const { email, password } = state;
      loginUser(email, password);
      history.push("/");
    });
  };

  return (
    <div>
      <h1>Signup page</h1>

      {errMsg && JSON.stringify(errMsg)}

      <form onSubmit={register}>
        <label>
          Email:
          <input
            type="text"
            onChange={(event) => {
              const email = event.target.value;
              setState({ ...state, email });
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            onChange={(event) => {
              const password = event.target.value;
              setState({ ...state, password });
            }}
          />
        </label>
        <br />

        <label>
          First Name:
          <input
            type="text"
            onChange={(event) => {
              const first_name = event.target.value;
              setState({
                ...state,
                profile: {
                  ...state.profile,
                  first_name,
                },
              });
            }}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            onChange={(event) => {
              const last_name = event.target.value;
              setState({
                ...state,
                profile: {
                  ...state.profile,
                  last_name,
                },
              });
            }}
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="text"
            onChange={(event) => {
              const phone_number = event.target.value;
              setState({
                ...state,
                profile: {
                  ...state.profile,
                  phone_number,
                },
              });
            }}
          />
        </label>
        <br />
        <label>
          Birth Date:
          <input
            type="text"
            onChange={(event) => {
              const age = event.target.value;
              setState({
                ...state,
                profile: {
                  ...state.profile,
                  age,
                },
              });
            }}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            onChange={(event) => {
              const gender = event.target.value;
              setState({
                ...state,
                profile: {
                  ...state.profile,
                  gender,
                },
              });
            }}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

SignupPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errMsg: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    errMsg: state.auth.errMsg,
  };
};

const mapDispatchToProps = {
  registerUser,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
