import axios from "axios";




export const rechargeMember=(id)=>async(dispatch)=>{
    try {
      dispatch({
        type:'rechargeRequest'
      })
      const {data}= await axios.put(`/api/v1/member/recharge/${id}`);
      dispatch({
        type:'rechargeSuccess',
        payload:data.message,
      })
    } catch (error) {
      dispatch({
        type: "rechargeFailure",
        payload: error.response.data.message,
      });
    }
  }
  export const addNewMember=(name,age,avatar,address,phone,email,membershipPeriod)=>async(dispatch)=>{
    try {
      dispatch({
        type: "newMemberRequest",
      });
  
      const { data } = await axios.post(
        `/api/v1/member/add`,
        {
          name,age,avatar,address,phone,email,membershipPeriod,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "newMemberSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "newMemberFailure",
        payload: error.response.data.message,
      });
    }
  }

  export const updateMember=(id,phone,email)=>async(dispatch)=>{
    try {
      dispatch({
        type: "updateMemberRequest",
      });
  
      const { data } = await axios.put(
        `/api/v1/member/${id}`,
        {
         phone,
         email
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "updateMemberSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateMemberFailure",
        payload: error.response.data.message,
      });
    }
  }
  export const deleteMember=(id)=>async(dispatch)=>{
    try {
      dispatch({
        type: "deleteMemberRequest",
      });
  
      const { data } = await axios.delete(
        `/api/v1/member/${id}`
      );
      dispatch({
        type: "deleteMemberSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteMemberFailure",
        payload: error.response.data.message,
      });
    }
  }