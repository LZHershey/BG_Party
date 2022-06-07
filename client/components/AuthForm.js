import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../store";

const AuthForm = ({ formName, displayName }) => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name={formName}>
        <div className="login-form">
          <div>
            <label htmlFor="username">
              <small>Username:</small>
            </label>
            <input
              name="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password:</small>
            </label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
