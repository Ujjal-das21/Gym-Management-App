import { Avatar, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Register.css";
import { useAlert } from "react-alert";
import { registerUser } from "../../Actions/User";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <div className="registerFormImageContainer"></div>
        <div class="upload">
          <Avatar
            src={avatar}
            alt="User"
            style={{
              backgroundColor: "black",
              border: "5px solid #eeeeee",
              height: "100px",
              width: "100px",
            }}
            variant="rounded"
          />
           <input type="file" accept="image/*" onChange={handleImageChange} />
          <div class="round">
            <input
              type="file"
              className="bg-red"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Add style={{ color: "white", fontWeight: "bolder" }} />
          </div>
        </div>

        <input
          type="text"
          value={name}
          placeholder="Name"
          className="inputText"
          required
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <label for="name">Name</label>
        <input
          type="email"
          placeholder="Email"
          className="inputText"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label for="email">Email</label>
        <input
          type="password"
          className="inputText"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <label for="password">Password</label>
        <Button className="btn" disabled={loading} type="submit">
          Sign Up
        </Button>
        <Link className="loginLink" to="/">
          Already Signed Up? Login Now
        </Link>
      </form>
    </div>
  );
};

export default Register;
