import axios from "axios";
import React,{useState} from "react";
import {useHistory} from "react-router-dom";
 const AddUser =()=>{
     let history = useHistory();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        mobile:""
    });

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit= async e =>
{
    e.preventDefault();
    const ressult = await axios.post("http://localhost:8000/users",user);
    history.push("/");

}   
 return(
        <>
        <div className="container">
        <h1 className="text-center">Add User</h1>
        <form action="#" method="post" onSubmit={(e)=> onSubmit(e)}>
            <div class="form-group">
              <input type="text" name="name" id="name" class="form-control" placeholder="Name"
              value={user.name}
              onChange={e=> onInputChange(e)}/>
            </div>
            <div class="form-group">
              <input type="text" name="username" id="username" class="form-control" placeholder="Username"
               value={user.username} 
               onChange={e=> onInputChange(e)}/>
            </div>
            <div class="form-group">
              <input type="text" name="email" id="email" class="form-control" placeholder="Email"
               value={user.email}
               onChange={e=> onInputChange(e)} />
            </div>
            <div class="form-group">
              <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Mobile Number"
               value={user.mobile}
               onChange={e=> onInputChange(e)}/>
            </div>
            <button className="btn btn-outline-primary"  >Submit</button>
        </form>
        </div>
        </>
    )
 }
 export default AddUser;