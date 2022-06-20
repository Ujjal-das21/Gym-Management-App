import { configureStore } from "@reduxjs/toolkit";
import { addMemberReducer,  rechargeReducer } from "./Reducers/Member";
import {
 
  allManagersReducer,
  memberlistReducer,
  memberSearchReducer,
  userReducer,
} from "./Reducers/User";
const store = configureStore({
  reducer: {
    user: userReducer,
    memberList:memberlistReducer,
    allManagers:allManagersReducer,
    recharge:rechargeReducer,
    newMember:addMemberReducer,
    memberSearch:memberSearchReducer,

  },
});

export default store;