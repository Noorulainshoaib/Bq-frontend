import React , {useState}from "react";
//import { GlobalContext } from '../Context/context' remove kr den comment backend k api laga k
//import Cookies from "js-cookie";


export default function Guest() {
 


const [email,setEmail]= useState("")
const [password,setPassword] = useState("")
//const [state,dispatch] = useContext(GlobalContext) remove kr dena comment backend k api laga k

const LoginUser = (e) => {
    e.preventDefault();
 const payload ={email,password}
 console.log(payload)

 // all comment will be remove of this axios api after adding backend api on axion .then dispatch type token catch import global context const state dispacth

 //axios.post('',payload) //post wali api lagani ha login ki 
 //.then((json) =>{

//// Cookies.get('token , json.data.token') 

// dispatch({
  //type : "Login"
  //token :json.data.token
//})
 //}
 //)) //comment remove kr dena lagan k bd
 
 //.catch(err => console.log(err.message))  //comment remove kr dena lagana k bd
}

    return (
 <div className="container">
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh' ,width:'100%'}}>
<div className="p-5 bg-dark text-white">
<form onSubmit={LoginUser}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary">
   Login
  </button>
</form>

</div>


    </div>
 </div>

    )
}