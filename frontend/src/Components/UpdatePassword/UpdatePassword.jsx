import "./UpdatePassword.css";
import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.recharge);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
    dispatch(loadUser());
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
  }, [dispatch, error, alert, message]);

  return (
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={submitHandler}>
        <Typography className="headingPassword" variant="h3">
          Update Password
        </Typography>
        <div className="inputContainerPassword">
          <input
            type="password"
            placeholder="Old Password"
            required
            value={oldPassword}
            className="updatePasswordInputs"
            onChange={(e) => setOldPassword(e.target.value)}
            id="password"
          />

          <input
            type="password"
            placeholder="New Password"
            required
            className="updatePasswordInputs"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <Button className="btn btn-primary" disabled={loading} type="submit">
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
