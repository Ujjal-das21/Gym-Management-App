import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllManagers, getAllMembers } from "../../Actions/User";
import Member from "../Member/Member";
import User from "../User/User";
import Loader from "../Loader/Loader";
import "./Home.css";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";
const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error: rechargeError, message } = useSelector(
    (state) => state.recharge
  );
  const { loading, member, error } = useSelector((state) => state.memberList);
  const { users, loading: usersLoading } = useSelector(
    (state) => state.allManagers
  );
  useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getAllManagers());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (rechargeError) {
      alert.error(rechargeError);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, alert, error, message, rechargeError]);
  return loading === true || usersLoading === true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {member && member.length > 0 ? (
          member.map((member) => (
            <Member
              key={member._id}
              memberImage={member.avatar.url}
              memberId={member._id}
              memberName={member.name}
              phone={member.phone}
              email={member.email}
              joining={member.joining}
              membershipStart={member.membershipStart}
              membershipEnd={member.membershipEnd}
              status={member.status}
            />
          ))
        ) : (
          <Typography variant="h6">No members</Typography>
        )}
      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography>No Manager</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
