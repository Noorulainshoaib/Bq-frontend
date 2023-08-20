import React, { useState, useContext} from "react";
import Admin from "./Admin";
import User from "./User";
import Guest from "./Guest";
import { GlobalContext } from "./Context/context";
//import { decodeToken } from 'react-jwt' //remove comment after adding the beackend api 
const ComponentsByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentsByRoles[params] || ComponentsByRoles['guest']
//const getDecodeToken = (token) => decodeToken || null      //remove comment after adding the beackend api 

export default function App() {

  const { state, dispatch } = useContext(GlobalContext)


  //const currentToken = getDecodeToken (state.token)  //remove comment after adding the beackend api 

  //const CurrentUser = getUserRole(currentToken.role) //remove comment after adding the beackend api 
  const CurrentUser = getUserRole(state.role) //remove this after add bckend api
  return <CurrentUser />
}