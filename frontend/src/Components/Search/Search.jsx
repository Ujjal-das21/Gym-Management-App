import { Button, Typography } from "@mui/material";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMembers } from "../../Actions/User";
import Member from "../Member/Member";
import "./Search.css";

const Search = () => {
  const [name, setName] = React.useState("");

  const { member, loading } = useSelector((state) => state.memberSearch);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchMembers(name));
  };

  return (
    <div className="search">
      <form className="searchForm" onSubmit={submitHandler}>
        <Typography className="headingTertiaryDifferent" variant="h5">
          MyGym
        </Typography>
        <div className="wrapperSearch">
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="searchInputText"
            placeholder="Name"
          />
          <label for="name">Name</label>

          <button disabled={loading} className="btnSearch" type="submit">
            Search
          </button>
        </div>

        <div className="searchResults">
          {member &&
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
            ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
