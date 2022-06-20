import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Actions/User";
import Loader from "../Loader/Loader";
import "./Account.css";
const Account = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
  };
  return userLoading === true ? (
    <Loader />
  ) : (
    <div className="account">
      <div className="accountright">
        <Avatar
          src={user.avatar.url}
          sx={{ height: "8vmax", width: "8vmax" }}
          variant="rounded"
        />
        <Button
          className="btn btn-primary"
          variant="contained"
          onClick={logoutHandler}
        >
          Log out
        </Button>

        <Typography variant="h5" className="headingName">
          {user.name}
        </Typography>
        <Link className="editLink" to="/update/profile">
          Edit Profile
        </Link>
        <Link className="editLink" to="/update/password">
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default Account;
