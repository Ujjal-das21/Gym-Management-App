import { Avatar, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addNewMember } from "../../Actions/Member";
import { loadUser } from "../../Actions/User";
import "./NewMember.css";
const NewMember = () => {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [membershipPeriod, setMembershipPeriod] = useState("");
  const { loading, error, message } = useSelector((state) => state.newMember);
  const dispatch = useDispatch();
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
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      addNewMember(name, age, avatar, address, phone, email, membershipPeriod)
    );
    dispatch(loadUser());
  };
  const alert = useAlert();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <div className="newPost">
      <form className="newPostForm" onSubmit={submitHandler}>
        <div className="container1">
          <h3 className="headingSecondary neonShadow marginTopSmall">
            New Member
          </h3>

          <div class="upload">
            <div className="avatarContainer">
              <Avatar
                src={avatar}
                alt="User"
                style={{
                  backgroundColor: "black",
                  border: "6px solid black",
                  height: "10rem",
                  width: "10rem",
                }}
                variant="rounded"
              />
            </div>

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
        </div>
        <div className="container2">
          <div className="redBox">{}</div>
          <input
            type="text"
            placeholder=" Name"
            value={name}
            id="name"
            className="inputText"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label for="name">Name</label>
          <input
            type="number"
            placeholder=" Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="age"
            required
          />
          <label for="age">Age</label>
          <input
            type="text"
            placeholder=" Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="email">Email</label>
          <input
            type="number"
            placeholder="Membership Period"
            value={membershipPeriod}
            onChange={(e) => setMembershipPeriod(e.target.value)}
            required
            className="marginBottomSmall"
          />

          <Button className="btn" disabled={loading} type="submit">
            Add Member
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewMember;
