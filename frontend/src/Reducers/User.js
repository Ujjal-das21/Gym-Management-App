import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});

export const memberlistReducer = createReducer(initialState,{
  memberListRequest:(state)=>{
    state.loading = true;
  },
  memberListSuccess:(state,action)=>{
    state.loading = false;
    state.member = action.payload
  },
  memberlistFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors:(state)=>{
    state.error = null;},


})
export const memberSearchReducer = createReducer(initialState,{
  memberSearchRequest:(state)=>{
    state.loading = true;
  },
  memberSearchSuccess:(state,action)=>{
    state.loading = false;
    state.member = action.payload
  },
  memberSearchFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors:(state)=>{
    state.error = null;},


})


export const allManagersReducer = createReducer(initialState,{
  allManagersRequest:(state)=>{
    state.loading = true;
  },
  allManagersSuccess:(state,action)=>{
    state.loading = false;
    state.users = action.payload
  },
  allManagersFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors:(state)=>{
    state.error = null;},


})