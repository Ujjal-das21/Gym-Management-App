import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Actions/User";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, message } = useSelector((state) => state.recharge);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);
  return (
    <div className="forgotPassword">
      <form className="forgotPasswordForm" onSubmit={submitHandler}>
        <div className="loginFormImageHolder"></div>
        <Typography className="headingTertiary" variant="h5">
          MyGym
        </Typography>
        <div className="inputBlock">
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            className="forgotPasswordInputs inputText"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
          <Button className="btn" disabled={loading} type="submit">
            Send Token
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
