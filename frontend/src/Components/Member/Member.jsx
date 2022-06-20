import React, { useEffect, useState } from "react";
import { Avatar, Button, Dialog, Typography } from "@mui/material";
import { MoreVert, DeleteOutline } from "@mui/icons-material";
import "./Member.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteMember,
  rechargeMember,
  updateMember,
} from "../../Actions/Member";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import EmailIcon from "@mui/icons-material/Email";
import EmailIconOutlined from "@mui/icons-material/EmailOutlined";
import { getAllMembers } from "../../Actions/User";

const Member = ({
  memberId,
  memberName,
  phone,
  email,
  memberImage,
  joining,
  membershipStart,
  membershipEnd,
  status,
}) => {
  const [recharge, setRecharge] = useState(false);
  const [notify, setNotify] = useState(false);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);
  const [phoneToggle, setPhoneToggle] = useState(false);

  const dispatch = useDispatch();

  const handleRecharge = async () => {
    setRecharge(!recharge);
    await dispatch(rechargeMember(memberId));
    dispatch(getAllMembers());
    alert.success("Membership Renewed");
  };

  const updateMemberHandler = (e) => {
    e.preventDefault();
    dispatch(updateMember(memberId, phoneValue, emailValue));
    dispatch(getAllMembers());
  };
  const deleteMemberHandler = async () => {
    await dispatch(deleteMember(memberId));
    dispatch(getAllMembers());
  };
  useEffect(() => {
    if (status === true) {
      setRecharge(true);
    }
  }, [status]);
  useEffect(() => {
    if (status === false) {
      notify(true);
    } else if (status === true) {
      setNotify(false);
    }
  }, [status, notify]);

  return (
    <div className="post">
      <div className="postContainer1">
        <Avatar
          src={memberImage}
          alt={memberName}
          sx={{ height: "5vmax", width: "5vmax" }}
          variant="rounded"
        />
        <Link to={`/member/${memberId}`}>
          <p className="personName">{memberName}</p>
        </Link>
      </div>
      <div className="postContainer2">
        <div className="postHeader">
          <Button
            className="phoneToggle"
            onClick={() => setPhoneToggle(!phoneToggle)}
          >
            <MoreVert />
          </Button>
        </div>
        <div className="postDetails">
          <Typography fontWeight={500} color="rgba(0,0,0,0.582)" fontSize={10}>
            {phone}
          </Typography>
          <Typography fontWeight={500} color="rgba(0,0,0,0.582)" fontSize={10}>
            {email}
          </Typography>
          <Typography fontWeight={500} color="rgba(0,0,0,0.582)" fontSize={10}>
            {membershipStart}
          </Typography>
          <Typography fontWeight={500} color="rgba(0,0,0,0.582)" fontSize={10}>
            {membershipEnd}
          </Typography>
        </div>

        <div className="postFooter">
          <Button onClick={handleRecharge}>
            {recharge ? (
              <FlashOnIcon style={{ color: "blue" }} />
            ) : (
              <FlashOnOutlinedIcon style={{ color: "red" }} />
            )}
          </Button>

          <Button>
            {notify ? (
              <EmailIcon style={{ color: "red" }} />
            ) : (
              <EmailIconOutlined style={{ color: "blue" }} />
            )}
          </Button>

          <Button onClick={deleteMemberHandler}>
            <DeleteOutline style={{ color: "red" }} />
          </Button>
        </div>
      </div>

      <Dialog open={phoneToggle} onClose={() => setPhoneToggle(!phoneToggle)}>
        <div className="DialogBox">
          <Typography variant="h4">Update Phone And Email</Typography>

          <form className="commentForm" onSubmit={updateMemberHandler}>
            <input
              type="text"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="New Phone Number"
              required
            />
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="New Email"
              required
            />

            <Button className="btn " type="submit" variant="contained">
              Update
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default Member;
