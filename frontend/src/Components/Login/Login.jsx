import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Actions/User";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };
  return (
    <div className="login">
      <form className="loginForm " onSubmit={loginHandler}>
        <div className="gearContainer">
          <span className="gearDecor">Gear Up The Game</span>
        </div>

        <div className="loginFormImageHolder"></div>
        <Typography
          className="headingTertiary"
          variant="h5"
          style={{ padding: "2vmax" }}
        >
          MyGym
        </Typography>

        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          className="inputText"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="email">Email</label>

        <input
          type="password"
          placeholder="Password"
          required
          className="inputText"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="password">Password</label>
        <Button className="btn" type="submit">
          Login
        </Button>

        <Link className="forgotPasswordLink" to="/forgot/password">
          Forgot Password
        </Link>

        <Link className="forgotPasswordLink registerLink" to="/register">
          New User&rarr;
        </Link>
      </form>
    </div>
  );
};

export default Login;
