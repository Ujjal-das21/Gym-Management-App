import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const rechargeReducer= createReducer(initialState,{
    rechargeRequest: (state) => {
        state.loading = true;
      },
      rechargeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
     
      },
      rechargeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateProfileRequest: (state) => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
     
      },
      updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
     
      updatePasswordRequest: (state) => {
        state.loading = true;
      },
      updatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
     
      },
      updatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
     forgotPasswordRequest: (state) => {
        state.loading = true;
      },
   forgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
     
      },
    forgotPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    resetPasswordRequest: (state) => {
        state.loading = true;
      },
   resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
     
      },
  resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
     
      clearErrors:(state)=>{
        state.error = null;
      },
      clearMessage:(state)=>{
        state.message =null;
      },
    
})


export const addMemberReducer= createReducer(initialState,{

  newMemberRequest: (state) => {
    state.loading = true;
  },
  newMemberSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
 
  },
  newMemberFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deleteMemberRequest: (state) => {
    state.loading = true;
  },
  deleteMemberSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
 
  },
  deleteMemberFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateMemberRequest: (state) => {
    state.loading = true;
  },
  updateMemberSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
 
  },
  updateMemberFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  clearErrors:(state)=>{
    state.error = null;
  },
  clearMessage:(state)=>{
    state.message =null;
  },
})